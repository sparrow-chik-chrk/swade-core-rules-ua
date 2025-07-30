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
Hooks.once("init", function () {
    game.swadeCoreUa ??= {}, game.swadeCoreUa.macros ??= {}, game.swadeCoreUa.macros.jackOfAllTrades = Os;
});