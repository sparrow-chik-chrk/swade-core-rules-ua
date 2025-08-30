var at = Object.defineProperty;
var l = (a, s) => at(a, "name", {value: s, configurable: !0});

function Ve({defaultAssigned: a = !0} = {}) {
    const s = new Set(canvas.tokens.controlled.map((e) => e.actor).filter((e) => e));
    if (!s.size && a) {
        const e = game.user.character;
        e && s.add(e);
    }
    if (!s.size) {
        ui.notifications.warn(game.i18n.localize("SWADE_CORE_RULES.Notifications.NoActorSelected"));
        return;
    }
    return s;
}

l(Ve, "getSelectedActors");

async function Os() {
    const a = {
            required: !0,
            label: game.i18n.localize("TYPES.Item.skill"),
            hint: game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.SkillHint")
        }, s = {
            name: "skill",
            placeholder: game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.SkillPlaceholder")
        }, e = new foundry.data.fields.StringField(a).toFormGroup({}, s).outerHTML,
        t = await foundry.applications.api.DialogV2.prompt({
            window: {
                title: game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.Title"),
                icon: "fa-solid fa-scroll"
            },
            position: {width: 400, height: "auto"},
            content: `<fieldset>${e}</fieldset>`,
            ok: {
                icon: "fa-solid fa-brain",
                label: game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.RollSmarts"),
                callback: (i, r) => r.form.elements.skill.value.trim()
            }
        });
    if (!t) {
        ui.notifications.warn(game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.SkillInputInvalid"));
        return;
    }
    const n = Ve();
    if (n)
        for (const i of n) {
            const r = await i.rollAttribute?.("smarts");
            if (!r) {
                ui.notifications.warn(game.i18n.format("SWADE_CORE_RULES.Macros.JackOfAllTrades.RollSmartsFailed", {name: i.name}));
                continue;
            }
            const o = game.settings.get("swade", "coreSkillsCompendium"),
                u = game.packs.find(p =>
                    p.metadata.packageName === o &&
                    p.metadata.type === "Item" &&
                    p.metadata.name.includes("skills")
                );
            if (!u) {
                ui.notifications.error(game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.CompendiumNotFound"));
                return;
            }
            const f = u.index.find((D) => D.name.toLowerCase() === t.toLowerCase()),
                c = (await fromUuid(f?.uuid))?.toObject() ?? {
                    name: t,
                    type: "skill",
                    system: {die: {}, swid: game.swade.util.slugify(t)}
                }, m = "swade-core-rules", p = "jack-of-all-trades";
            foundry.utils.setProperty(c, `flags.${m}.${p}`, !0);
            const g = getDocumentClass("ChatMessage"), h = g.getSpeaker({actor: i}),
                b = i.items.find((D) => D.type === "skill" && D.getFlag(m, p));
            b && (g.create({
                content: game.i18n.format("SWADE_CORE_RULES.Macros.JackOfAllTrades.LostSkill", {
                    actor: i.name,
                    skill: b.name
                }),
                speaker: h
            }), await b.delete());
            const S = r.successes > 1 ? 6 : r.successes === 1 ? 4 : null;
            let x;
            console.log("actor", i?.name, "skill", b?.name ?? t, "die", S);
            console.log(game.i18n.localize("SWADE_CORE_RULES.Macros.JackOfAllTrades.GainedSkill"));
            switch (S) {
                case 6:
                case 4:
                    x = game.i18n.format("SWADE_CORE_RULES.Macros.JackOfAllTrades.GainedSkill", {
                        actor: i.name,
                        skill: t,
                        die: `d${S}`
                    });
                    break;
                default:
                    x = game.i18n.format("SWADE_CORE_RULES.Macros.JackOfAllTrades.MustTryAgain", {
                        actor: i.name
                    });
                    break;
            }
            S && (c.system.die = {sides: S}, await i.createEmbeddedDocuments("Item", [c], {renderSheet: !1})), g.create({
                content: x,
                speaker: h
            });
        }
}

l(Os, "jackOfAllTrades");

async function gAW(actor) {
    return actor.items
        .filter(i => i.type === "weapon" && i.system?.damage)
        .sort((a, b) => a.name.localeCompare(b.name));
}

l(gAW, "getActorWeapons");

async function pW(actor, opts = {}) {
    const title = opts.title ?? game.i18n.localize("SWADE_CORE_RULES.Macros.PickWeapon.Title");
    const okLabel = opts.label ?? game.i18n.localize("SWADE_CORE_RULES.Macros.PickWeapon.RollDamage");
    const fieldLabel = game.i18n.localize("SWADE_CORE_RULES.Macros.PickWeapon.WeaponLabel");

    const weapons = await gAW(actor);
    if (!weapons.length) {
        ui.notifications.warn(game.i18n.localize("SWADE_CORE_RULES.Macros.Errors.NoWeaponsWithDamage"));
        return null;
    }

    const optsHtml = weapons.map(w => `<option value="${w.id}">${w.name}</option>`).join("");
    const pickedId = await foundry.applications.api.DialogV2.prompt({
        window: {title, icon: "fa-solid fa-bolt"},
        content: `<div class="form-group"><label>${fieldLabel}</label><select name="w" style="width:100%">${optsHtml}</select></div>`,
        ok: {label: okLabel, callback: (_ev, dlg) => dlg.form.elements.w.value}
    });
    return pickedId ? actor.items.get(pickedId) : null;
}

l(pW, "pickWeapon");

async function rIFC() {
    console.log("[rIFC] start");

    const uuid = document.activeElement?.closest(".item-card")?.dataset?.itemUuid;
    console.log("[rIFC] dataset itemUuid:", uuid);
    if (uuid) {
        const doc = await fromUuid(uuid);
        console.log("[rIFC] got:", doc?.name, doc?.type, doc?.system?.damage);
        if (doc?.type === "weapon" && doc.system?.damage) return doc;
    }

    console.log("[rIFC] not found → null");
    return null;
}

l(rIFC, "resolveItemFromContext");


async function rDX(itm, mul = 2) {
    if (!itm?.system?.damage) {
        ui.notifications.warn(game.i18n.localize("SWADE_CORE_RULES.Macros.Errors.NoDamageFormula"));
        return;
    }
    const base = itm.system.damage;
    return mul === 1 ? itm.rollDamage() : itm.rollDamage({dmgOverride: `(${base}) * ${mul}`});
}

l(rDX, "rollDamageX");

function fSA() {
    const set = Ve();
    return set ? [...set][0] : null;
}

l(fSA, "firstSelectedActor");

async function Mb() {
    let itm = await rIFC();
    // Ve() вже показала попередження

    if (!itm) {
        let actor = itm?.actor ?? fSA();
        if (!actor) return;
        itm = await pW(actor, {
            title: game.i18n.localize("SWADE_CORE_RULES.Macros.MightyBlow.Title"),
            label: game.i18n.localize("SWADE_CORE_RULES.Macros.MightyBlow.RollX2")
        });
        if (!itm) return;
    }
    return rDX(itm, 2);
}

l(Mb, "mightyBlow");

const TURN_PARTIAL = "systems/swade/templates/sidebar/turn.hbs";
const MY_TURN_TPL = "modules/swade-core-rules-ua/templates/sidebar/turn.hbs";
const MY_TRACKER_TPL = "modules/swade-core-rules-ua/templates/sidebar/tracker.hbs";

async function registerTurnPartial() {
    const resp = await fetch(MY_TURN_TPL);
    const src = await resp.text(); // у файлі вже {{{cardString}}}
    Handlebars.unregisterPartial(TURN_PARTIAL);
    Handlebars.registerPartial(TURN_PARTIAL, Handlebars.compile(src));
}

Hooks.once("init", async () => {
    // ваш код:
    game.swadeCoreUa ??= {};
    game.swadeCoreUa.macros ??= {};
    game.swadeCoreUa.macros.jackOfAllTrades = Os;
    game.swadeCoreUa.macros.mightyBlow = Mb;

    // підміна partial'а
    await registerTurnPartial();

    Object.defineProperty(CombatTracker.prototype, "template", {
        configurable: true,
        get() {
            return MY_TRACKER_TPL;
        }
    });
});
Hooks.on("renderCombatTracker", async () => {
    if (!Handlebars.partials[TURN_PARTIAL]) await registerTurnPartial();
});
Hooks.once("ready", () => {
    ui.combat?.render(true);
});