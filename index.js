var at = Object.defineProperty;
var Ot = Object.getPrototypeOf;
var Lt = Reflect.get;
var Ft = (a, s, e) => s in a ? at(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e;
var l = (a, s) => at(a, "name", { value: s, configurable: !0 });
var T = (a, s, e) => (Ft(a, typeof s != "symbol" ? s + "" : s, e), e), Le = (a, s, e) => {
  if (!s.has(a))
    throw TypeError("Cannot " + e);
};
var d = (a, s, e) => (Le(a, s, "read from private field"), e ? e.call(a) : s.get(a)), w = (a, s, e) => {
  if (s.has(a))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(a) : s.set(a, e);
}, k = (a, s, e, t) => (Le(a, s, "write to private field"), t ? t.call(a, e) : s.set(a, e), e);
var v = (a, s, e) => (Le(a, s, "access private method"), e), Fe = (a, s, e) => Lt(Ot(a), e, s);
const H = {
    id: "swade-core-rules",
    title: "Savage Worlds Adventure Edition Core Rules",
    description: "<p><i>Savage Worlds</i> is the core ruleset for all of Pinnacle’s roleplaying games.</p><p>The current version is the <i>Savage Worlds Adventure Edition</i>, or “SWADE.”</p><p><i>Savage Worlds</i> has everything you need to play narrative or miniature-based games, with quick,simple, yet comprehensive rules for everything from combat to Dramatic Tasks, Chases, and Interludes. The emphasis is on less bookkeeping for the Game Master so she can quickly and easily create worlds and adventures for any setting and focus on the players and their actions to keep the action and story rocketing along.</p>",
    authors: [{ name: "Pinnacle Entertainment Group", url: "https://peginc.com" }],
    url: "https://www.peginc.com/",
    version: "13.0.1",
    compatibility: { minimum: "13", verified: "13.341" },
    changelog: "https://support.metamorphic-digital.com/changelog/swade-core-rules",
    bugs: "https://support.metamorphic-digital.com",
    media: [{
      type: "cover",
      url: "https://sigil-fvtt.s3.amazonaws.com/swade-core-rules/assets/cover.webp"
    }, { type: "icon", url: "https://sigil-fvtt.s3.amazonaws.com/swade-core-rules/assets/icon.webp" }, {
      type: "setup",
      url: "modules/swade-core-rules/assets/art/banner.webp"
    }],
    scripts: [],
    esmodules: ["./index.js"],
    styles: ["./style.css"],
    languages: [{ flags: {}, lang: "en", name: "English", path: "lang/en.json" }],
    packs: [{
      label: "Action Deck",
      type: "Cards",
      name: "swade-action-deck",
      path: "packs/swade-action-deck.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_01.webp"
    }, {
      label: "Actions",
      type: "Item",
      name: "swade-actions",
      path: "packs/swade-actions.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_02.webp"
    }, {
      label: "Armor",
      name: "swade-armor",
      type: "Item",
      path: "packs/swade-armor.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_03.webp"
    }, {
      label: "Bestiary",
      name: "swade-bestiary",
      type: "Actor",
      path: "packs/swade-bestiary.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_04.webp"
    }, {
      label: "Edges",
      name: "swade-edges",
      type: "Item",
      path: "packs/swade-edges.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_05.webp"
    }, {
      label: "Equipment",
      name: "swade-equipment",
      type: "Item",
      path: "packs/swade-equipment.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_06.webp"
    }, {
      label: "Hindrances",
      name: "swade-hindrances",
      type: "Item",
      path: "packs/swade-hindrances.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_07.webp"
    }, {
      label: "Macros",
      name: "swade-macros",
      type: "Macro",
      path: "packs/swade-macros.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_08.webp"
    }, {
      label: "Modern Firearms",
      name: "swade-modern-firearms",
      type: "Item",
      path: "packs/swade-modern-firearms.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_09.webp"
    }, {
      label: "Personal Weapons",
      name: "swade-personal-weapons",
      type: "Item",
      path: "packs/swade-personal-weapons.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_10.webp"
    }, {
      label: "Powers",
      name: "swade-powers",
      type: "Item",
      path: "packs/swade-powers.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_11.webp"
    }, {
      label: "Ancestries",
      name: "swade-races",
      type: "Item",
      path: "packs/swade-races.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_12.webp"
    }, {
      label: "Ancestral Abilities",
      name: "swade-racial-abilities",
      type: "Item",
      path: "packs/swade-racial-abilities.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_13.webp"
    }, {
      label: "Rules",
      name: "swade-rules",
      type: "JournalEntry",
      path: "packs/swade-rules.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_14.webp"
    }, {
      label: "Skills",
      name: "swade-skills",
      type: "Item",
      path: "packs/swade-skills.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_15.webp"
    }, {
      label: "Special Weapons",
      name: "swade-special-weapons",
      type: "Item",
      path: "packs/swade-special-weapons.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_16.webp"
    }, {
      label: "Special Abilities",
      name: "swade-specialabilities",
      type: "Item",
      path: "packs/swade-specialabilities.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_17.webp"
    }, {
      label: "Tables",
      name: "swade-tables",
      type: "RollTable",
      path: "packs/swade-tables.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_18.webp"
    }, {
      label: "Vehicles",
      name: "swade-vehicles",
      type: "Actor",
      path: "packs/swade-vehicles.db",
      system: "swade",
      package: "swade-core-rules",
      visible: !0,
      banner: "modules/swade-core-rules/assets/art/banners/banner_19.webp"
    }],
    relationships: {
      systems: [{
        id: "swade",
        type: "system",
        manifest: "https://gitlab.com/api/v4/projects/16269883/packages/generic/swade/latest/system.json",
        compatibility: { minimum: "5", verified: "5.0.0" },
        flags: { sigil: { localDevVersion: { distPath: "dist" } } }
      }]
    },
    socket: !1,
    manifest: "https://sigil-fvtt.s3.amazonaws.com/swade-core-rules/module.json",
    protected: !0,
    coreTranslation: !1,
    flags: {
      sigil: {
        sheetClass: "SwadeCoreJournalSheet",
        parent: "swade-core-rules",
        cssClass: "swade-core",
        productTitle: "Swade Core",
        productSlug: "SwadeCore",
        featureConfigurations: {}
      }
    },
    packFolders: [{
      name: "SWADE Core Rules",
      sorting: "m",
      color: "#7C6840",
      packs: ["swade-rules", "swade-races", "swade-racial-abilities", "swade-specialabilities", "swade-actions", "swade-skills", "swade-edges", "swade-hindrances", "swade-powers", "swade-personal-weapons", "swade-modern-firearms", "swade-special-weapons", "swade-armor", "swade-equipment", "swade-vehicles", "swade-bestiary", "swade-macros", "swade-action-deck", "swade-tables"]
    }]
  }, y = H.id, Mt = H.version, re = H.flags?.sigil?.productTitle, nt = H.flags?.sigil?.productSlug,
  $ = H.flags?.sigil?.cssClass, _e = H.flags?.sigil?.featureConfigurations, Me = H.flags?.sigil?.sheetClass,
  Rt = { packageId: "swade-core-rules", productSlug: "SwadeCore" };
var te, Q, z, ue, dt;
const W = class W extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
) {
  constructor() {
    super(...arguments);
    /* ------------------------------------------------------ */
    /*   Properties                                           */
    /* ------------------------------------------------------ */
    /**
     * The resolved form data.
     *
     * @type {object|null}
     */
    w(this, te, null);
    /* ------------------------------------------------------ */
    /**
     * Reference to current value of the 'group' select.
     *
     * @type {string}
     */
    w(this, Q, null);
    /* ------------------------------------------------------ */
    /**
     * Reference to the current value of the 'item' select.
     *
     * @type {string}
     */
    w(this, z, null);
  }

  /* ------------------------------------------------------ */
  /**
   * The resolved form data.
   *
   * @type {object|null}
   */
  get config() {
    return d(this, te);
  }

  /* ------------------------------------------------------ */
  /*   Rendering                                            */

  /* ------------------------------------------------------ */
  /**
   * Factory method for async behavior.
   *
   * @param {object} options      Rendering options.
   * @returns {Promise}           A promise that resolves to the form data.
   */
  static async create(e) {
    return new Promise((t) => {
      const n = new this(e);
      n.addEventListener("close", () => t(n.config), { once: !0 }), n.render({ force: !0 });
    });
  }

  /* ------------------------------------------------------ */
  /** @override */
  async _preparePartContext(e, t, n) {
    if (t = await super._preparePartContext(e, t, n), e === "group") {
      t.group = { legend: "SWADE_CORE_RULES.AuxSelectDialog.GROUP" };
      const i = {};
      for (const r of this.options.optgroups)
        r.group && (i[r.group] = r.group);
      t.group.field = new foundry.data.fields.StringField({
        required: !0,
        choices: i
      }), t.group.value = d(this, Q) ?? k(this, Q, Object.keys(i)[0]), t.group.dataset = { dtype: "String" };
    } else if (e === "item") {
      t.item = { legend: "SWADE_CORE_RULES.AuxSelectDialog.ITEM" };
      const i = {};
      for (const o of this.options.optgroups)
        o.group === d(this, Q) && (i[o.value] = o.label);
      t.item.field = new foundry.data.fields.StringField({
        required: !0,
        choices: i
      }), d(this, z) in i || k(this, z, Object.keys(i)[0]), t.item.value = d(this, z);
      const r = await fromUuid(t.item.value);
      r && (t.item.enriched = await foundry.applications.ux.TextEditor.implementation.enrichHTML(
        r.system.description,
        { relativeTo: r }
      ));
    } else
      e === "footer" && (t.buttons = [{ type: "submit", icon: "fa-solid fa-check", label: "Confirm" }]);
    return t;
  }

  /* ------------------------------------------------------ */
  /*   Factory methods and event handlers                   */

  /* ------------------------------------------------------ */
  /** @override */
  _attachPartListeners(e, t, n) {
    super._attachPartListeners(e, t, n), e === "group" ? t.querySelector("select").addEventListener("change", (r) => {
      k(this, Q, r.currentTarget.value), this.render({ parts: ["item"] });
    }) : e === "item" && t.querySelector("select").addEventListener("change", (i) => {
      k(this, z, i.currentTarget.value), this.render({ parts: ["item"] });
    });
  }
};
te = new WeakMap(), Q = new WeakMap(), z = new WeakMap(), ue = new WeakSet(), dt = /* @__PURE__ */ l(function (e, t, n) {
  k(this, te, foundry.utils.expandObject(n.object)), this.close();
}, "#onSubmit"), /**
 * Handle form submission.
 *
 * @this {AuxiliaryPicker}
 * @param {Event} event                   The submit event.
 * @param {HTMLFormElement} form          The form element.
 * @param {FormDataExtended} formData     Form data.
 */
  w(W, ue), l(W, "AuxiliaryPicker"), /** @override */
  T(W, "DEFAULT_OPTIONS", {
    tag: "form",
    classes: ["aux-picker"],
    form: {
      handler: v(W, ue, dt)
    },
    position: {
      width: 400,
      height: "auto"
    },
    window: {
      contentClasses: ["standard-form"]
    },
    optgroups: null
  }), /* ------------------------------------------------------ */
  /** @override */
  T(W, "PARTS", {
    group: {
      template: "modules/swade-core-rules/templates/swade-builder/auxiliary-picker-group.hbs"
    },
    item: {
      template: "modules/swade-core-rules/templates/swade-builder/auxiliary-picker-item.hbs"
    },
    footer: {
      template: "templates/generic/form-footer.hbs"
    }
  });
let je = W;
var se, Ne, P, C, O, J, q, j, me, ut;
const Ye = class Ye {
  /**
   * @class
   * @param {SwadeBuilder} builder      The builder this belongs to.
   * @param {object} indexEntry         Reference to the index entry for this component.
   */
  constructor(s, e) {
    /* -------------------------------------------------- */
    /**
     * Returns what item type a special ability should be prompting.
     *
     * @param {string} uuid     The uuid of the parent item.
     * @returns {string}        The item type.
     */
    w(this, se);
    /* -------------------------------------------------- */
    /*   Utility methods                                  */
    /* -------------------------------------------------- */
    /**
     * Load and assign the item of this component.
     *
     * @returns {Promise<Item>}     The loaded item.
     */
    w(this, me);
    /* -------------------------------------------------- */
    /**
     * The builder application.
     *
     * @type {SwadeBuilder}
     */
    w(this, P, null);
    /* -------------------------------------------------- */
    /**
     * The index entry of this component.
     *
     * @type {object}
     */
    w(this, C, null);
    /* -------------------------------------------------- */
    /**
     * The full item of this component.
     *
     * @type {Item}
     */
    w(this, O, null);
    /* -------------------------------------------------- */
    /**
     * Is this component selected?
     *
     * @type {boolean}
     */
    w(this, J, !1);
    /* -------------------------------------------------- */
    /**
     * Reference to the component in which this is an item grant.
     *
     * @type {SwadeBuilderComponent}
     */
    w(this, q, null);
    /* -------------------------------------------------- */
    /**
     * The configured cost of this component.
     *
     * @type {number}
     */
    w(this, j, null);
    /* -------------------------------------------------- */
    /**
     * Reference to a created mutation for this component.
     *
     * @type {object|null}
     */
    T(this, "mutation", null);
    k(this, P, s), k(this, C, e);
  }

  /* -------------------------------------------------- */
  /*   Properties                                       */

  /* -------------------------------------------------- */
  /**
   * Items that initiate the picking of an auxiliary item.
   *
   * @type {Record<string, Record<string, string>>}
   */
  get PARENT_ITEMS() {
    return {};
  }

  /* -------------------------------------------------- */
  /**
   * The uuids of all parent items that initiate a choice of an auxiliary item.
   *
   * @type {Set<string>}
   */
  get PARENT_UUIDS() {
    const s = /* @__PURE__ */ new Set();
    for (const e of Object.values(this.PARENT_ITEMS))
      for (const t of Object.values(e))
        s.add(t);
    return s;
  }

  /* -------------------------------------------------- */
  /**
   * The index entry of this component.
   *
   * @type {object}
   */
  get indexEntry() {
    return d(this, C);
  }

  /* -------------------------------------------------- */
  /**
   * The full item of this component.
   *
   * @type {Item|Promise<Item>}
   */
  get item() {
    return d(this, O) ? d(this, O) : v(this, me, ut).call(this);
  }

  /* -------------------------------------------------- */
  /**
   * Does this item require picking an additional item, such as a power, hindrance, edge, or skill?
   *
   * @type {boolean}
   */
  get hasAuxiliary() {
    return this.PARENT_UUIDS.has(this.uuid);
  }

  /* -------------------------------------------------- */
  /**
   * Can this item be selected?
   *
   * @type {boolean}
   */
  get isAvailable() {
    return d(this, J) ? this.hasAuxiliary ? this.getAuxChoices().length > 0 : !1 : !0;
  }

  /* -------------------------------------------------- */
  /**
   * Can this item be added? Subclasses can override this for more granularity.
   *
   * @type {boolean}
   */
  get canBeAdded() {
    return this.isAvailable;
  }

  /* -------------------------------------------------- */
  /**
   * Is this component a skill, and a core skill?
   *
   * @type {boolean}
   */
  get isCoreSkill() {
    return this.type !== "skill" ? !1 : game.settings.get("swade", "coreSkills").split(",").reduce((e, t) => (t = t.toLowerCase().trim(), t && e.add(t), e), /* @__PURE__ */ new Set()).has(this.name.toLowerCase());
  }

  /* -------------------------------------------------- */
  /**
   * Is this component selected?
   *
   * @type {boolean}
   */
  get selected() {
    return d(this, J);
  }

  /* -------------------------------------------------- */
  /**
   * Reference to the component in which this is an item grant.
   *
   * @type {SwadeBuilderComponent}
   */
  get parent() {
    return d(this, q);
  }

  /* -------------------------------------------------- */
  /**
   * The cost of this component.
   *
   * @type {number}
   */
  get cost() {
    return d(this, j);
  }

  /* -------------------------------------------------- */
  /**
   * The name of this item.
   *
   * @type {string}
   */
  get name() {
    return d(this, C).name;
  }

  /* -------------------------------------------------- */
  /**
   * The item type of this item.
   *
   * @type {string}
   */
  get type() {
    return d(this, C).type;
  }

  /* -------------------------------------------------- */
  /**
   * The key of the package that this item belongs to.
   *
   * @type {string}
   */
  get packageName() {
    const s = d(this, C).uuid, [, e] = s.split(".");
    return e;
  }

  /* -------------------------------------------------- */
  /**
   * The savage worlds id.
   *
   * @type {string}
   */
  get swid() {
    return (d(this, O) ? this.item.system.swid : d(this, C).system.swid) ?? "";
  }

  /* -------------------------------------------------- */
  /**
   * The uuid of the item.
   *
   * @type {string}
   */
  get uuid() {
    return d(this, O) ? this.item.uuid : d(this, C).uuid;
  }

  /* -------------------------------------------------- */
  /**
   * Initiate the selection of this component.
   *
   * @param {SwadeBuilderComponent} [parent]      A parent component that grants this item rather
   *                                              than it being on the ancestry item directly.
   * @returns {Promise<boolean>}                  A promise that resolves to whether the selection was completed.
   */
  async select(s) {
    await this.item;
    let e = [];
    if (this.hasAuxiliary && (e = await this.selectAuxiliary(this), !e))
      return !1;
    s && k(this, q, s);
    let t = !0;
    try {
      await this.configureCost();
    } catch {
      t = !1;
    }
    if (!t) {
      for (const n of e)
        await d(this, P).cache.get(n.uuid).deselect();
      return k(this, q, null), !1;
    }
    return k(this, J, !0), !0;
  }

  /* -------------------------------------------------- */
  /**
   * Select any auxiliary items.
   *
   * @param {SwadeBuilderComponent} [parent]      A parent component that grants this item rather
   *                                              than it being on the ancestry item directly.
   * @returns {Promise<Item[]|null>}              A promise that resolves to the selected items, or null if cancelled.
   */
  async selectAuxiliary(s) {
    const e = v(this, se, Ne).call(this, this.item.uuid), t = this.getAuxChoices(),
      n = game.i18n.localize(CONFIG.Item.typeLabels[e]), i = await je.create({
        optgroups: t,
        window: {
          title: game.i18n.format("SWADE_CORE_RULES.AuxSelectDialog.Title", { type: n })
        }
      });
    if (!i)
      return null;
    const r = d(this, P).cache.get(i.uuid);
    return await r.select(s) ? [r.item] : null;
  }

  /* -------------------------------------------------- */
  /**
   * Remove any parts of this item, rendering it de-selected.
   *
   * @param {boolean} [render]      Whether to re-render the builder.
   */
  async deselect(s = !1) {
    k(this, J, !1), k(this, q, null), k(this, j, null), this.mutation = null;
    for (const e of d(this, P).cache.values())
      e.parent === this && await e.deselect(!1);
    s && d(this, P).render({ parts: ["componentList", "product"] });
  }

  /* -------------------------------------------------- */
  /**
   * Provide the render context for this specific component.
   *
   * @returns {object}      Rendering context object for this component.
   */
  renderContext() {
    let s;
    this.PARENT_UUIDS.has(this.uuid) ? s = null : this.type === "ability" ? s = d(this, C).system.build.cost : s = this.cost || null;
    const e = {
      component: this,
      type: this.type,
      img: d(this, C).img,
      uuid: d(this, C).uuid,
      name: this.name,
      swid: this.swid,
      cost: s,
      baseCost: s,
      package: this.packageName,
      subtitle: game.i18n.localize(
        this.type === "ability" ? "SWADE_CORE_RULES.SpecialAbility" : CONFIG.Item.typeLabels[this.type]
      ),
      dataset: [
        { key: "package", value: this.packageName },
        { key: "name", value: this.name }
      ]
    };
    return this.type === "hindrance" && e.dataset.push({ key: "severity", value: d(this, C).system.severity || "" }), e;
  }

  /* -------------------------------------------------- */
  /**
   * Configure the cost of this component. Either returns a number or throws an error.
   *
   * @returns {Promise<number>}     The cost of this component.
   */
  async configureCost() {
    const s = await this.item;
    return this.PARENT_UUIDS.has(s.uuid) ? k(this, j, 0) : k(this, j, await this._configureCost(s)), d(this, j);
  }

  /* -------------------------------------------------- */
  /**
   * Determine cost based on item type and builder.
   *
   * @abstract
   * @param {Item} item     The item whose cost to determine.
   */
  async _configureCost(s) {
    return 0;
  }

  /* -------------------------------------------------- */
  /**
   * Get the rank of this item if it is an edge.
   *
   * @returns {number}      The rank, or 0 (novice) if not set.
   */
  getEdgeRank() {
    const e = (d(this, O) ? this.item : d(this, C)).system?.requirements ?? [];
    for (const t of e)
      if (t.type === "rank")
        return t.value;
    return 0;
  }

  /* -------------------------------------------------- */
  /**
   * Get the severity of this item if it is a hindrance.
   *
   * @returns {string}      The severity (major, minor, either).
   */
  getSeverity() {
    return (d(this, O) ? this.item : d(this, C)).system?.severity || "";
  }

  /* -------------------------------------------------- */
  /**
   * Get choices for an aux dialog for this item.
   *
   * @returns {object[]}      The available choices.
   */
  getAuxChoices() {
    const s = Array.from(d(this, P).cache.values()).reduce((t, n) => (n === this || n.hasAuxiliary || n.isAvailable || t.add(n.swid), t), /* @__PURE__ */ new Set()),
      e = v(this, se, Ne).call(this, this.item.uuid);
    return d(this, P).cache.entries().reduce((t, [n, i]) => {
      if (i === this || i.hasAuxiliary || !i.isAvailable || n === this.item.uuid || i.type !== e || s.has(i.swid))
        return t;
      const r = this._filterAuxChoice(n, i);
      return r && t.push(r), t;
    }, []);
  }

  /**
   * Builds the auxiliary choice. Return falsy to exclude.
   *
   * @param {string} uuid                     The UUID of the item
   * @param {SwadeBuilderComponent} component The associated component
   * @returns {void | {value: string; label: string; group?: string}}
   */
  _filterAuxChoice(s, e) {
    return { value: s, label: e.name };
  }
};
se = new WeakSet(), Ne = /* @__PURE__ */ l(function (s) {
  for (const [e, t] of Object.entries(this.PARENT_ITEMS))
    for (const n of Object.values(t))
      if (n === s)
        return e;
  throw new Error("This is not the uuid of a valid parent item.");
}, "#PARENT_TYPE"), P = new WeakMap(), C = new WeakMap(), O = new WeakMap(), J = new WeakMap(), q = new WeakMap(), j = new WeakMap(), me = new WeakSet(), ut = /* @__PURE__ */ l(async function () {
  const s = await fromUuid(d(this, C).uuid);
  return k(this, O, s), s;
}, "#load"), l(Ye, "SwadeBuilderComponent");
let oe = Ye;
const it = foundry.applications.ux.SearchFilter;
var pe, L, N, G, V, Z, fe, mt, ge, pt, he, ft;
const Xe = class Xe {
  /**
   * @param {SwadeBuilder} builder      The builder this is attached to.
   */
  constructor(s) {
    /* ------------------------------------------------------ */
    /**
     * Determine whether an element is visible.
     *
     * @param {HTMLElement} element     The filtered element.
     * @returns {boolean}               Whether the element is visible.
     */
    w(this, fe);
    /* ------------------------------------------------------ */
    /**
     * Is this element hidden due to its pack not being selected?
     *
     * @param {HTMLElement} element     The filtered element.
     * @returns {boolean}               Whether the element's pack is visible.
     */
    w(this, ge);
    /* ------------------------------------------------------ */
    /**
     * Is this element hidden due to the search input?
     *
     * @param {HTMLElement} element     The filtered element.
     * @returns {boolean}               Whether the element is hidden due to the search.
     */
    w(this, he);
    /* ------------------------------------------------------ */
    /*   Properties                                           */
    /* ------------------------------------------------------ */
    /**
     * Reference to the builder to which this filter is attached.
     *
     * @type {SwadeBuilder}
     */
    w(this, pe, null);
    /* ------------------------------------------------------ */
    /**
     * The html element that contains all the entries that can be filtered.
     *
     * @type {HTMLElement}
     */
    w(this, L, null);
    /* ------------------------------------------------------ */
    /**
     * Reference to the pack filter multi-select element.
     *
     * @type {HTMLElement}
     */
    w(this, N, null);
    /* ------------------------------------------------------ */
    /**
     * Reference to the search input.
     *
     * @type {HTMLElement}
     */
    w(this, G, null);
    /* ------------------------------------------------------ */
    /**
     * Registered value of the search input.
     *
     * @type {RegExp}
     */
    w(this, V, null);
    /* ------------------------------------------------------ */
    /**
     * Registered value of the pack filter multi select element.
     *
     * @type {string[]}
     */
    w(this, Z, null);
    k(this, pe, s);
  }

  /* ------------------------------------------------------ */
  /**
   * Set the html element that contains all the entries that can be filtered.
   *
   * @param {HTMLElement} element     The containing element.
   */
  set element(s) {
    k(this, L, s);
  }

  /* ------------------------------------------------------ */
  /**
   * Registerd value of the pack filter multi-select element.
   *
   * @type {string[]}
   */
  get packValue() {
    return d(this, Z);
  }

  /* ------------------------------------------------------ */
  /*   Instance methods                                     */

  /* ------------------------------------------------------ */
  /**
   * Remove references to deprecated html elements.
   */
  reset() {
    k(this, L, null), k(this, G, null), k(this, N, null);
  }

  /* ------------------------------------------------------ */
  /**
   * Set up input elements.
   */
  initialize() {
    if (!d(this, L))
      return;
    k(this, G, d(this, L).querySelector(".search")), k(this, N, d(this, L).querySelector("[data-filter=pack]"));
    const s = /* @__PURE__ */ l((e) => {
      const t = d(this, G).value;
      t ? k(this, V, new RegExp(RegExp.escape(it.cleanQuery(t)), "i")) : k(this, V, null), this.determineVisibility();
    }, "fn");
    d(this, G).addEventListener("input", foundry.utils.debounce(s, 250).bind(this)), d(this, N).addEventListener("change", (e) => {
      k(this, Z, d(this, N).value), this.determineVisibility();
    });
  }

  /* ------------------------------------------------------ */
  /*   Filtering methods                                    */

  /* ------------------------------------------------------ */
  /**
   * Set the 'filtered' class on each element if it should be hidden.
   */
  determineVisibility() {
    if (d(this, L))
      for (const s of d(this, L).querySelectorAll(".entry")) {
        const e = v(this, fe, mt).call(this, s);
        s.classList.toggle("hidden", !e);
      }
  }
};
pe = new WeakMap(), L = new WeakMap(), N = new WeakMap(), G = new WeakMap(), V = new WeakMap(), Z = new WeakMap(), fe = new WeakSet(), mt = /* @__PURE__ */ l(function (s) {
  return !(v(this, ge, pt).call(this, s) || v(this, he, ft).call(this, s));
}, "#determineVisibility"), ge = new WeakSet(), pt = /* @__PURE__ */ l(function (s) {
  if (!d(this, Z)?.length)
    return !1;
  const e = s.dataset.package;
  return !d(this, N).value.includes(e);
}, "#filterPack"), he = new WeakSet(), ft = /* @__PURE__ */ l(function (s) {
  if (!d(this, V))
    return !1;
  const e = s.dataset.name;
  return !d(this, V).test(it.cleanQuery(e));
}, "#filterSearch"), l(Xe, "SwadeBuilderFiltering");
let $e = Xe;
const { HandlebarsApplicationMixin: Ut, ApplicationV2: xt } = foundry.applications.api, {
  DragDrop: _t,
  TextEditor: jt
} = foundry.applications.ux;
var F, U, ae, A, we, gt, ye, ht, be, wt, ke, yt, ve, bt, Ee, kt, Ce, vt, Se, Et, Ie, Ct;
const E = class E extends Ut(xt) {
  constructor() {
    super(...arguments);
    /* -------------------------------------------------- */
    /**
     * Retrieve from the index of all packs and create builder component classes.
     */
    w(this, we);
    /* -------------------------------------------------- */
    /**
     * Prepare the part context for the component list.
     *
     * @param {object} context        The current context for rendering. Will be mutated.
     * @returns {Promise<object>}     Mutated context for rendering.
     */
    w(this, ye);
    /* -------------------------------------------------- */
    /**
     * Prepare the part context for the product pane.
     *
     * @param {object} context        The current context for rendering. Will be mutated.
     * @returns {Promise<object>}     Mutated context for rendering.
     */
    w(this, be);
    /* -------------------------------------------------- */
    /**
     * Attach event listeners to the component list.
     *
     * @param {HTMLElement} htmlElement     The html element being inserted.
     */
    w(this, ke);
    /* -------------------------------------------------- */
    /** @override */
    T(this, "tabGroups", {
      components: void 0
    });
    /* -------------------------------------------------- */
    /*   Properties                                       */
    /* -------------------------------------------------- */
    /**
     * Search and filtering utility class for the component tab.
     *
     * @type {SwadeBuilderFiltering}
     */
    w(this, U, null);
    /* -------------------------------------------------- */
    /**
     * Is the filter section collapsed?
     *
     * @type {boolean}
     */
    w(this, ae, !0);
    /* -------------------------------------------------- */
    /**
     * A cache of retrieved index entries via uuid.
     *
     * @type {Map<string, SwadeBuilderComponent>}
     */
    w(this, A, /* @__PURE__ */ new Map());
  }

  /* -------------------------------------------------- */
  /**
   * A cache of retrieved index entries via uuid.
   *
   * @type {Map<string, SwadeBuilderComponent>}
   */
  get cache() {
    return d(this, A);
  }

  /* -------------------------------------------------- */
  /**
   * The type of item being made ('vehicle', 'ancestry', 'superhero').
   *
   * @type {"vehicle"|"ancestry"|"superhero"}
   */
  get type() {
    return this.options.type;
  }

  /* -------------------------------------------------- */
  /**
   * The current total cost of the modifications.
   *
   * @type {number}
   * @abstract
   */
  get cost() {
    return 0;
  }

  /* -------------------------------------------------- */
  /**
   * Create an instance of this builder.
   *
   * @returns {Promise<SwadeBuilder>}     A created and rendered instance of a builder.
   */
  static async create() {
    const e = this.DEFAULT_OPTIONS.type;
    return new this({
      type: e,
      window: {
        icon: d(E, F)[e].icon,
        title: `${game.i18n.localize("SWADE_CORE_RULES.SwadeBuilder")}: ${game.i18n.localize(
          d(E, F)[e].label
        )}`
      }
    }).render({ force: !0 });
  }

  /* -------------------------------------------------- */
  /*   Rendering                                        */

  /* -------------------------------------------------- */
  /**
   * Utility method for creating a directory button.
   *
   * @param {string} key                The builder type.
   * @returns {HTMLElement|boolean}     The created button, or false if not available.
   */
  static _makeButton(e) {
    const t = d(E, F)[e];
    if (t.visible?.() === !1)
      return !1;
    const n = document.createElement("BUTTON");
    return n.innerHTML = `<i class="${t.icon}"></i> ${game.i18n.format("SWADE_CORE_RULES.ButtonLabel", {
      type: game.i18n.localize(t.label)
    })}`, n.addEventListener("click", () => t.applicationClass.create()), n;
  }

  /* -------------------------------------------------- */
  /**
   * Create button elements for rendering.
   *
   * @param {string} documentName       The document name.
   * @returns {HTMLButtonElement[]}     Button elements.
   */
  static _makeButtons(e) {
    const t = [];
    for (const [n, i] of Object.entries(d(E, F))) {
      if (i.type !== e)
        continue;
      const r = E._makeButton(n);
      r && t.push(r);
    }
    return t;
  }

  /* -------------------------------------------------- */
  /**
   * Call a hook for other modules to register subclasses of the builder.
   */
  static _registerSubclasses() {
    const e = d(E, F);
    Hooks.callAll("swade-core-rules.registerBuilderSubclasses", e);
  }

  /* -------------------------------------------------- */
  /** @override */
  _onRender(e, t) {
    super._onRender(e, t), new _t.implementation({
      dragSelector: ".entry-list .entry",
      dropSelector: "fieldset.mods",
      callbacks: {
        dragstart: (i) => {
          i.dataTransfer.setData(
            "text/plain",
            JSON.stringify({
              uuid: i.currentTarget.dataset.uuid
            })
          );
        },
        drop: (i) => {
          const r = jt.implementation.getDragEventData(i).uuid;
          v(E, Ee, kt).call(this, r);
        }
      }
    }).bind(this.element);
  }

  /* -------------------------------------------------- */
  /** @override */
  async _prepareContext(e) {
    const t = {};
    return d(this, A).size || await v(this, we, gt).call(this), t.items = await this._prepareItems(t), t.isVehicle = this.type === "vehicle", t.isAncestry = this.type === "ancestry", t.isSuperhero = this.type === "superhero", t;
  }

  /* -------------------------------------------------- */
  /**
   * Prepare the list of items to display.
   *
   * @param {object} context          Rendering context.
   * @returns {Promise<object[]>}     The list of items.
   * @abstract
   */
  async _prepareItems(e) {
    const t = [], n = /* @__PURE__ */ new Map();
    for (const i of this.cache.values())
      i.parent && (n.get(i.parent.uuid) || n.set(i.parent.uuid, /* @__PURE__ */ new Set()), n.get(i.parent.uuid).add(i));
    for (const i of this.cache.values()) {
      const r = i.renderContext();
      r.children = Array.from(n.get(i.uuid) ?? []).map((o) => o.renderContext()), r.children.length && (r.cost = r.children.reduce((o, u) => o + u.cost, 0), r.children.sort((o, u) => o.name.localeCompare(u.name))), t.push(r);
    }
    return t.sort((i, r) => i.name.localeCompare(r.name)), t;
  }

  /* -------------------------------------------------- */
  /** @override */
  async _preparePartContext(e, t, n) {
    t = await super._preparePartContext(e, t, n);
    const i = /* @__PURE__ */ new Set();
    for (const r of this.cache.values())
      r.isAvailable || i.add(r.uuid);
    switch (t.swids = i, e) {
      case "componentList":
        return v(this, ye, ht).call(this, t);
      case "product":
        return v(this, be, wt).call(this, t);
    }
  }

  /* -------------------------------------------------- */
  /**
   * Test the index of an item whether the item is valid.
   *
   * @param {ItemIndex} itemIndex     The index of the item.
   * @returns {boolean}               Whether it is allowed.
   * @abstract
   */
  isValidItem(e) {
    return !1;
  }

  /* -------------------------------------------------- */
  /**
   * Prepare part context for the product.
   *
   * @param {object} context        Rendering context.
   * @returns {Promise<object>}     Context for the product part.
   */
  async _preparePartContextProduct(e) {
    throw new Error("The `_preparePartContextProduct` method must be subclassed.");
  }

  /* -------------------------------------------------- */
  /** @override */
  _attachPartListeners(e, t, n) {
    switch (super._attachPartListeners(e, t, n), e) {
      case "componentList":
        return v(this, ke, yt).call(this, t);
      case "product":
        return this._attachPartListenersProduct(t);
    }
  }

  /* -------------------------------------------------- */
  /**
   * Attach event listeners to the product pane if this is an ancestry being made.
   *
   * @param {HTMLElement} htmlElement     The html element being inserted.
   * @abstract
   */
  _attachPartListenersProduct(e) {
  }

  /* -------------------------------------------------- */
  /** @override */
  _syncPartState(e, t, n, i) {
    if (super._syncPartState(e, t, n, i), e === "componentList") {
      const r = t.querySelector("input[type=search]"), o = n.querySelector("input[type=search]").value ?? "";
      r.value = o;
      const u = t.querySelector("[data-filter=pack]"), f = n.querySelector("[data-filter=pack]").value;
      u.value = f;
      for (const c of t.querySelectorAll(".entry")) {
        const m = c.dataset.uuid, p = n.querySelector(`.entry[data-uuid="${m}"]`);
        p && c.classList.toggle("hidden", p.classList.contains("hidden"));
      }
    }
  }

  /**
   * Handle click events to finalize the build.
   *
   * @param {Event} event             Initiating click event.
   * @param {HTMLElement} target      The element with the data-action property.
   * @abstract
   */
  async _finalize(e, t) {
    throw new Error("The `_finalize` method must be subclassed.");
  }
};
F = new WeakMap(), U = new WeakMap(), ae = new WeakMap(), A = new WeakMap(), we = new WeakSet(), gt = /* @__PURE__ */ l(async function () {
  const e = foundry.utils.deepClone(CONFIG.Item.typeLabels);
  for (const [i, r] of Object.entries(e))
    e[i] = game.i18n.localize(r);
  const t = d(E, F)[this.type].indexFields, n = d(E, F)[this.type].componentClass;
  for (const i of game.packs) {
    if (i.metadata.packageName === "swade" || i.metadata.type !== "Item")
      continue;
    const r = await i.getIndex({ fields: t });
    for (const o of r)
      if (this.isValidItem(o)) {
        const u = new n(this, o);
        d(this, A).set(o.uuid, u);
      }
  }
}, "#prepareCache"), ye = new WeakSet(), ht = /* @__PURE__ */ l(async function (e) {
  e.components = {
    items: e.items.filter((i) => i.component.canBeAdded && !e.swids.has(i.swid)).sort((i, r) => i.name.localeCompare(r.name)),
    placeholder: game.i18n.format("SIDEBAR.Search", {
      types: game.i18n.localize("SWADE_CORE_RULES.ModAbilityPl")
    })
  }, e.collapsedFilters = d(this, ae), d(this, U) || k(this, U, new $e(this));
  const t = Array.from(d(this, A).values()).reduce((i, r) => i.add(r.packageName), /* @__PURE__ */ new Set()),
    n = e.components.filters = {};
  return n.pack = {
    field: new foundry.data.fields.SetField(new foundry.data.fields.StringField()),
    choices: t.reduce((i, r) => {
      const o = game.modules.get(r);
      return i.push({ value: r, label: o ? o.title : game.world.title }), i;
    }, []),
    dataset: { filter: "pack" }
  }, n.pack.value = d(this, U).packValue ?? Array.from(t), e;
}, "#preparePartContextComponentList"), be = new WeakSet(), wt = /* @__PURE__ */ l(async function (e) {
  e.addedItems = [];
  for (const t of e.items)
    t.component.selected && e.addedItems.push(t);
  return e.cost = this.cost, e.product = await this._preparePartContextProduct(e), e;
}, "#preparePartContextProduct"), ke = new WeakSet(), yt = /* @__PURE__ */ l(function (e) {
  const t = /* @__PURE__ */ l((r, o) => {
    for (const u of r) {
      const f = u.target.querySelector("img");
      if (u.isIntersecting) {
        const c = f.dataset.src;
        c && (f.src = c, delete f.dataset.src);
      } else {
        const c = f.src;
        c && (f.dataset.src = c, f.src = "");
      }
    }
  }, "callback"), n = new IntersectionObserver(t, {
    root: e,
    threshold: 0
  }), i = e.querySelectorAll(".entry");
  for (const r of i)
    n.observe(r);
  d(this, U).reset(), d(this, U).element = e, d(this, U).initialize();
}, "#attachPartListenersComponentList"), ve = new WeakSet(), bt = /* @__PURE__ */ l(async function (e, t) {
  const n = t.closest("[data-uuid]").dataset.uuid;
  (await d(this, A).get(n).item).sheet.render(!0);
}, "#showItem"), Ee = new WeakSet(), kt = /* @__PURE__ */ l(async function (e) {
  const t = d(this, A).get(e);
  if (!t?.canBeAdded)
    return;
  const i = (await t.item).system.swid || "";
  if (i && !t.PARENT_UUIDS.has(e)) {
    for (const [o, u] of d(this, A).entries())
      if (!(!u.selected || o === e) && u.swid === i) {
        ui.notifications.warn("SWADE_CORE_RULES.WarningCannotAddIdenticalSWID", { localize: !0 });
        return;
      }
  }
  await t.select() && this.render({ parts: ["componentList", "product"] });
}, "#addItem"), Ce = new WeakSet(), vt = /* @__PURE__ */ l(async function (e, t) {
  const n = t.closest("[data-uuid]").dataset.uuid;
  d(this, A).get(n).deselect(!0);
}, "#removeItem"), Se = new WeakSet(), Et = /* @__PURE__ */ l(async function (e, t) {
  this._finalize(e, t);
}, "#finalize"), Ie = new WeakSet(), Ct = /* @__PURE__ */ l(function (e, t) {
  k(this, ae, t.closest(".collapser").classList.toggle("collapsed"));
}, "#collapseFilters"), /* -------------------------------------------------- */
  /*   Handlers                                         */
  /* -------------------------------------------------- */
  /**
   * Handle click events on a component to render the item's sheet.
   *
   * @this {SwadeBuilder}
   * @param {Event} event             Initiating click event.
   * @param {HTMLElement} target      The element with the data-action property.
   */
  w(E, ve), /* -------------------------------------------------- */
  /**
   * Add an item via uuid.
   *
   * @this {SwadeBuilder}
   * @param {string} uuid     The uuid of the item.
   */
  w(E, Ee), /* -------------------------------------------------- */
  /**
   * Handle click events on an added component to attempt
   * to remove the mod from the item being build.
   *
   * @this {SwadeBuilder}
   * @param {Event} event             Initiating click event.
   * @param {HTMLElement} target      The element with the data-action property.
   */
  w(E, Ce), /* -------------------------------------------------- */
  /**
   * Handle click events to finalize the build.
   *
   * @this {SwadeBuilder}
   * @param {Event} event             Initiating click event.
   * @param {HTMLElement} target      The element with the data-action property.
   * @abstract
   */
  w(E, Se), /* -------------------------------------------------- */
  /**
   * Toggle the collapsed state of the filters fieldset for a components list.
   *
   * @this {SwadeBuilder}
   * @param {Event} event             Initiating click event.
   * @param {HTMLElement} target      The element with the data-action property.
   */
  w(E, Ie), l(E, "SwadeBuilder"), /**
 * Subclass registry.
 *
 * @enum {SubtypeMetadata}
 */
  w(E, F, {}), /* -------------------------------------------------- */
  /** @override */
  T(E, "DEFAULT_OPTIONS", {
    classes: ["swade-builder"],
    tag: "section",
    type: null,
    window: {
      title: "SWADE_CORE_RULES.SwadeBuilder",
      minimizable: !0,
      resizable: !0,
      contentTag: "section"
    },
    position: {
      width: 1e3,
      height: 1e3
    },
    actions: {
      showItem: v(E, ve, bt),
      removeItem: v(E, Ce, vt),
      finalize: v(E, Se, Et),
      collapseFilters: v(E, Ie, Ct)
    }
  }), /* -------------------------------------------------- */
  /** @override */
  T(E, "PARTS", {
    componentList: {
      template: "modules/swade-core-rules/templates/swade-builder/component-list.hbs",
      classes: ["component-list"],
      templates: [
        "modules/swade-core-rules/templates/swade-builder/navigation.hbs",
        "modules/swade-core-rules/templates/swade-builder/component-list-entry.hbs"
      ],
      scrollable: [".entry-list.scrollable"]
    },
    product: {
      template: "modules/swade-core-rules/templates/swade-builder/product.hbs",
      classes: ["product"],
      templates: ["modules/swade-core-rules/templates/swade-builder/footer.hbs"],
      scrollable: ["", ".added-mods"]
    },
    initializer: {
      template: "modules/swade-core-rules/templates/swade-builder/initializer.hbs",
      classes: ["initializer", "standard-form"],
      scrollable: [""]
    }
  });
let X = E;
Hooks.once("setup", () => X._registerSubclasses());
Hooks.on("renderItemDirectory", (a, s, e) => {
  const t = s.querySelector(".directory-footer.action-buttons");
  for (const n of X._makeButtons("Item"))
    t.appendChild(n);
});
Hooks.on("renderActorDirectory", (a, s, e) => {
  const t = s.querySelector(".directory-footer.action-buttons");
  for (const n of X._makeButtons("Actor"))
    t.appendChild(n);
});
var I;
const R = class R extends X {
  /* -------------------------------------------------- */
  /**
   * @class
   * @param {object} options      Options.
   */
  constructor(e) {
    super(e);
    /**
     * An ephemeral ancestry item to provide changes to.
     *
     * @type {Item}
     */
    w(this, I, void 0);
    const t = getDocumentClass("Item"), n = new t({
      name: game.i18n.localize("SWADE_CORE_RULES.Ancestry"),
      type: "ancestry"
    });
    k(this, I, n);
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  get cost() {
    let e = 0, t = !1, n;
    for (const [i, r] of this.cache.entries())
      n ??= r.PARENT_UUIDS, !n.has(i) && r.selected && (e += r.cost, r.type === "power" && (t = !0));
    return e + (t ? 1 : 0);
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  async _prepareItems(e) {
    return (await super._prepareItems(e)).filter((n) => n.type === "ability");
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  isValidItem(e) {
    switch (e.type) {
      case "edge":
      case "hindrance":
      case "power":
      case "skill":
        return !0;
      case "ability":
        return e.system?.subtype !== "special" ? !1 : Number.isInteger(e.system.build?.cost);
      default:
        return !1;
    }
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  async _preparePartContextProduct(e) {
    return {
      ...e,
      item: d(this, I),
      value: d(this, I).name,
      field: new foundry.data.fields.StringField({ label: "SWADE_CORE_RULES.AncestryFieldName" }),
      disabled: e.cost !== d(this, I).system.threshold,
      goal: d(this, I).system.threshold,
      imgField: d(this, I).schema.getField("img"),
      imgValue: d(this, I).img === Item.implementation.getDefaultArtwork({ type: "ancestry" }).img ? null : d(this, I).img
    };
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  _attachPartListenersProduct(e) {
    for (const t of e.querySelectorAll("[name=name], [name=img]"))
      t.addEventListener("change", (n) => {
        const i = n.currentTarget.value, r = n.currentTarget.name;
        d(this, I).updateSource({ [r]: i });
      });
    e.querySelector("input.max").addEventListener("change", (t) => {
      d(this, I).updateSource({ "system.threshold": t.currentTarget.value }), this.render({ parts: ["product"] });
    });
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  async _finalize(e, t) {
    t.disabled = !0;
    const n = [];
    let i;
    for (const [u, f] of this.cache.entries()) {
      if (!f.selected || (i ??= f.PARENT_UUIDS, i.has(u)))
        continue;
      const c = { uuid: f.item.uuid };
      f.mutation && (c.mutation = f.mutation), n.push(c);
    }
    const r = d(this, I).toObject(), o = {
      name: r.name || game.i18n.localize(CONFIG.Item.typeLabels.ancestry),
      type: "ancestry",
      "system.grants": n,
      "system.description": r.system.description
    };
    r.img !== Item.implementation.getDefaultArtwork({ type: "ancestry" }).img && (o.img = r.img), await Item.implementation.create(o, { renderSheet: !0 }), this.close();
  }
};
I = new WeakMap(), l(R, "SwadeBuilderAncestry"), /* -------------------------------------------------- */
  /** @inheritdoc */
  T(R, "DEFAULT_OPTIONS", {
    type: "ancestry"
  }), /* -------------------------------------------------- */
  /** @inheritdoc */
  T(R, "PARTS", {
    ...Fe(R, R, "PARTS"),
    product: {
      ...Fe(R, R, "PARTS").product,
      template: "modules/swade-core-rules/templates/swade-builder/product-ancestry.hbs"
    }
  });
let He = R;
const Ke = class Ke extends oe {
  /** @inheritdoc */
  get PARENT_ITEMS() {
    return {
      edge: {
        0: "Compendium.swade-core-rules.swade-racial-abilities.Item.EDGEsFXsFJvZsIwc"
      },
      power: {
        0: "Compendium.swade-core-rules.swade-racial-abilities.Item.POWEsFXsFJvZsIwc"
      },
      hindrance: {
        0: "Compendium.swade-core-rules.swade-racial-abilities.Item.HINDsFXsFJvZsIwc"
      },
      skill: {
        1: "Compendium.swade-core-rules.swade-racial-abilities.Item.D32Vl3sS9tQMg2UJ",
        2: "Compendium.swade-core-rules.swade-racial-abilities.Item.19ZryraCmutpiIC2"
      }
    };
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  get canBeAdded() {
    const s = this.type === "ability" && this.indexEntry.system?.subtype === "special";
    return this.isAvailable && s;
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  async _configureCost(s) {
    let e;
    switch (s.type) {
      case "edge": {
        e = 2;
        const t = this.getEdgeRank();
        if (t > 3)
          throw new Error(`Edge item (${s.uuid}) was set to invalid rank requirement.`);
        e = e + t;
        break;
      }
      case "hindrance": {
        const t = s.system.severity;
        let n;
        if (t === "minor")
          n = "minor";
        else if (t === "major")
          n = "major";
        else if (t === "either") {
          const i = [
            { action: "minor", label: "SWADE_CORE_RULES.Minor" },
            { action: "major", label: "SWADE_CORE_RULES.Major", default: !0 }
          ];
          n = await foundry.applications.api.DialogV2.wait({
            buttons: i,
            window: { title: "SWADE_CORE_RULES.PickHindranceType" },
            position: { width: 400, height: "auto" },
            rejectClose: !0,
            modal: !0
          });
        }
        if (!n)
          throw new Error(`Hindrance severity was not set in item '${s.name}' (${s.uuid}).`);
        e = n === "major" ? -2 : -1;
        break;
      }
      case "power": {
        e = 1;
        break;
      }
      case "skill": {
        e = 1, this.parent.uuid === this.PARENT_ITEMS.skill[2] && (this.mutation = { system: { die: { sides: 6 } } }, this.isCoreSkill || (e = 2));
        break;
      }
      case "ability": {
        if (s.system.subtype !== "special")
          throw new Error("This is not a special ability.");
        e = s.system.build.cost;
        break;
      }
      case "gear": {
        e = s.system.mods;
        break;
      }
      case "weapon": {
        e = s.system.mods;
        break;
      }
      default:
        throw new Error("Attempting to parse the cost of an invalid item type.");
    }
    return e;
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  renderContext() {
    return super.renderContext();
  }

  /** @inheritdoc */
  _filterAuxChoice(s, e) {
    const t = super._filterAuxChoice(s, e);
    if (e.type === "edge") {
      const n = e.getEdgeRank();
      if (n >= 4)
        return;
      t.group = CONFIG.SWADE.ranks[n];
    } else if (e.type === "hindrance") {
      const n = e.getSeverity();
      if (!["minor", "major", "either"].includes(n))
        return;
      t.group = game.i18n.localize(`SWADE_CORE_RULES.${n.capitalize()}`);
    } else if (e.type === "skill") {
      const n = e.isCoreSkill;
      if (parent?.uuid === this.PARENT_ITEMS.skill[1]) {
        if (n)
          return;
      } else
        t.group = game.i18n.localize(n ? "SWADE.CoreSkill" : "SWADE_CORE_RULES.NonCoreSkill");
    }
    return t;
  }
};
l(Ke, "SwadeBuilderComponentAncestry");
let We = Ke;
Hooks.once("swade-core-rules.registerBuilderSubclasses", (a) => {
  a.ancestry = {
    icon: "fa-solid fa-horse",
    label: "SWADE_CORE_RULES.Ancestry",
    type: "Item",
    visible: () => game.user.can("ITEM_CREATE"),
    applicationClass: He,
    componentClass: We,
    indexFields: [
      "system.subtype",
      // to determine if this is a 'special ability'
      "system.severity",
      // for hindrances
      "system.mods",
      "system.rank",
      // for powers
      "system.build.cost",
      "system.requirements"
      // for edges to determine rank
    ]
  };
});
(/* @__PURE__ */ l(function () {
  Promise.resolve();
}, "enableDocumentsHMR"))();

function Nt() {
  Hooks.once("init", async () => {
    const a = game.modules.filter(
      (s) => s.active && s.flags[y]?.adventureImporter
    );
    for (const s of a)
      game.settings.register(s.id, "firstStartup", {
        name: "One-Time Startup Prompt",
        scope: "world",
        config: !1,
        type: Boolean,
        default: !0
      });
    Hooks.on("updateSetting", (s) => {
      if (s.key === "core.moduleConfiguration")
        for (const e of a)
          game.settings.set(e.id, "firstStartup", !s.value[e.id]);
    });
  }), Hooks.on("ready", async () => {
    const a = game.modules.filter(
      (s) => s.active && s.flags[y]?.adventureImporter
    );
    for (const s of a)
      if (game.settings.get(s.id, "firstStartup") && game.user.isGM)
        for (const t of s.packs.filter((n) => n.type === "Adventure")) {
          const i = await game.packs.get(`${s.id}.${t.name}`).getDocuments();
          for (const r of i)
            r.sheet.render(!0);
        }
  }), Hooks.on("activateNote", function (a, s) {
    if (!a.entry)
      return;
    const t = a.document.flags.sigil?.scroll;
    t && (s.scrollTag = t);
  });
}

l(Nt, "adventures");

function $t() {
  Hooks.once("init", () => {
    game.settings.register(y, "distraction-free", {
      name: "Distraction Free Mode",
      hint: "Replaces Journal borders with a less visually distracting style.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (a) => {
        a ? document.querySelectorAll(`.journal-sheet.${$}-wrapper`).forEach((s) => s.classList.add("distraction-free")) : document.querySelectorAll(`.journal-sheet.${$}-wrapper`).forEach((s) => s.classList.remove("distraction-free"));
      }
    });
  });
}

l($t, "distractionFreeMode");

async function Ht(a, s, e = null) {
  const t = game.scenes.get(a);
  if (!t)
    throw new Error(`The scene by id '${a}' does not exist!`);
  const n = s.map((r) => t.walls.get(r)).filter((r) => r);
  if (!n.length)
    throw new Error("No valid ids for wall documents were provided!");
  const i = n.map((r) => Wt(r, e));
  t.updateEmbeddedDocuments("Wall", i);
}

l(Ht, "toggleTemporaryWalls");

function Wt(a, s) {
  const e = CONST.WALL_RESTRICTION_TYPES, t = { _id: a.id }, n = a.flags[y];
  if (!(s === null || n && s || !n && !s))
    return t;
  if (n) {
    for (const r of e)
      t[r] = n[r];
    t[`flags.-=${y}`] = null;
  } else {
    const r = a.toObject();
    for (const o of e)
      t[o] = CONST.WALL_SENSE_TYPES.NONE, t[`flags.${y}.${o}`] = r[o];
  }
  return foundry.utils.expandObject(t);
}

l(Wt, "_craftWallUpdate");

function zt() {
  window.sigilMacros = window.sigilMacros ?? {}, window.sigilMacros[`${nt.toLowerCase()}Macros`] = {
    async toggleTokens(a, s) {
      return K("Token", a, s);
    },
    async toggleTiles(a, s) {
      return K("Tile", a, s);
    },
    async toggleDoors(a, s) {
      return K("Wall", a, s);
    },
    async toggleSounds(a, s) {
      return K("AmbientSound", a, s);
    },
    async toggleLights(a, s) {
      return K("AmbientLight", a, s);
    },
    async toggleRegions(a, s) {
      return K("Region", a, s);
    },
    async playSound(a) {
      let s, e = !1;
      if (typeof a == "object" && ({ soundUuid: a = "", playing: s, stopAll: e } = a), e)
        for (const n of game.playlists.playing)
          await n.stopAll();
      const t = await fromUuid(a);
      if (t) {
        if (s ??= !t.playing, t.documentName === "PlaylistSound")
          return s ? t.parent.playSound(t) : t.parent.stopSound(t);
        if (t.documentName === "Playlist")
          return s ? t.playAll() : t.stopAll();
      }
    },
    changeScene: Re,
    // legacy call for changeScene
    async changeAmbience(a, s, e) {
      const t = a.sceneId ? { ...a } : { sceneId: { ...a } };
      return t.ambience ??= {}, t.ambience.ambienceId1 ??= s, t.ambience.ambienceId2 ??= e, Re(t);
    },
    // legacy call for changeScene
    async changeWeather(a, s, e) {
      const t = a.sceneId ? { ...a } : { sceneId: { ...a } };
      return t.weather ??= {}, t.weather.weatherId1 ??= s, t.weather.weatherId2 ??= e, Re(t);
    },
    pickTileImage: Xt,
    pickMacro: qt,
    moveTile: Yt,
    updateSceneChildDocuments: Gt,
    changeToken: Jt,
    toggleTemporaryWalls: Ht,
    changeRoofOpacity: Kt
  }, window.sigilMacros[`${Rt.productSlug.toLowerCase()}Macros`] = window.sigilMacros[`${nt.toLowerCase()}Macros`];
}

l(zt, "globalMacroHelpers");

async function Jt(a, s, e) {
  let t, n;
  if (a.sceneId && ({
    sceneId: a,
    tokenId: s,
    states: e,
    force: t,
    checkAlive: n
  } = a), e.length !== 2 || !(canvas.scene?.id === a || t))
    return;
  const i = game.scenes.get(a), r = i.tokens.get(s) ?? i.tokens.getName(s);
  if (!r)
    return;
  if (e = [foundry.utils.expandObject(e[0]), foundry.utils.expandObject(e[1])], n && game.system.id === "pf2e") {
    let m = !1;
    if (Array.isArray(n))
      for (const p of n) {
        if (m)
          break;
        m = (await fromUuid(p))?.actor?.isDead;
      }
    if (m || (m = r.actor.isDead), m) {
      r.actor.update({ "system.attributes.hp.value": 0 });
      return;
    }
  }
  const o = r.updateSource(e[0], { dryRun: !0 }), u = foundry.utils.isEmpty(o), { actor: f, ...c } = u ? e[1] : e[0];
  await r.update(c, { animate: !1 }), f && await r.actor.update(f);
}

l(Jt, "changeToken");

async function qt({ title: a, prompt: s, macroOptions: e }) {
  const t = /* @__PURE__ */ l(({ id: f, macroName: c, macroFolder: m }) => {
    const p = game.macros.get(f);
    if (p)
      return p.execute();
    for (const g of game.macros)
      if (g.name === c && g.folder && g.folder.id === m)
        return g.execute();
  }, "executeMacro"), n = [], i = [];
  for (const { id: f, name: c, macroName: m, macroFolder: p, group: g } of e) {
    const h = document.createElement("BUTTON");
    if (h.type = "button", h.textContent = c, h.dataset.id = f, h.dataset.name = m, h.dataset.folder = p, g) {
      let b = n.find((S) => S.legend === g);
      b || (b = { legend: g, buttons: [] }, n.push(b)), b.buttons.push(h);
    }
    i.push(h);
  }
  const r = n.reduce((f, c) => f + c.buttons.length, 0) === i.length;
  let o = `<p>${s}</p>`;
  if (r) {
    o += "<div class=\"custom-buttons standard-form\">";
    for (const f of n) {
      const c = document.createElement("FIELDSET");
      c.classList.add("flexcol");
      const m = document.createElement("LEGEND");
      m.textContent = f.legend, c.insertAdjacentElement("beforeend", m);
      for (const p of f.buttons)
        c.insertAdjacentElement("beforeend", p);
      o += c.outerHTML;
    }
  } else {
    o += "<div class=\"form-footer custom-buttons flexcol\">";
    for (const f of i)
      o += f.outerHTML;
  }
  o += "</div>";
  const u = /* @__PURE__ */ l((f, c) => {
    for (const m of c.element.querySelectorAll(".custom-buttons button"))
      m.addEventListener("click", (p) => {
        const { id: g, name: h, folder: b } = p.currentTarget.dataset;
        t({ id: g, macroName: h, macroFolder: b });
      });
  }, "render");
  foundry.applications.api.Dialog.wait({
    content: o,
    render: u,
    buttons: [{ action: "ok", label: "Close", icon: "fa-solid fa-times" }],
    window: { title: a },
    position: { width: r ? 400 : 350, height: "auto" }
  });
}

l(qt, "pickMacro");

async function Gt({ sceneId: a, documentName: s, data: e, animate: t = !1 }) {
  if (!(s in Scene.metadata.embedded))
    return console.error(`${s} is not an embedded document type of a Scene!`), [];
  const n = game.scenes.get(a), i = n.getEmbeddedCollection(s);
  e = Vt(s, e);
  const r = e.filter((o) => i.has(o._id));
  return n.updateEmbeddedDocuments(s, r, {
    animate: t,
    teleport: !t
    // TODO: Fixme (with displace)
  });
}

l(Gt, "updateSceneChildDocuments");

function Vt(a, s) {
  switch (s = foundry.utils.deepClone(s), a) {
    case "Token":
    case "Tile":
      for (const e of s)
        "img" in e && foundry.utils.mergeObject(
          e,
          { "texture.src": e.img, "-=img": null },
          { performDeletions: !0 }
        );
      break;
  }
  return s;
}

l(Vt, "shimData");

async function Bt({ sceneId: a, ids: s, type: e, force: t, state: n, regionVisibility: i }) {
  if (!(a && canvas.scene?.id === a) && !t)
    return;
  typeof s == "string" && (s = [s]), s = new Set(s);
  const r = game.scenes.get(a), o = [], u = [];
  switch (e) {
    case "Tile":
    case "Token":
    case "AmbientLight":
    case "AmbientSound": {
      const c = r.getEmbeddedCollection(e);
      for (const m of c)
        s.has(m.id) && o.push({
          _id: m.id,
          hidden: [!0, !1].includes(n) ? n : !m.hidden
        });
      break;
    }
    case "Wall": {
      const {
          CLOSED: c,
          OPEN: m,
          LOCKED: p
        } = foundry.CONST.WALL_DOOR_STATES, { SECRET: g } = foundry.CONST.WALL_DOOR_TYPES,
        h = /* @__PURE__ */ l((b) => s.first() === "all" ? b.door === g : s.has(b.id), "filter");
      for (const b of r.walls)
        h(b) && o.push({
          _id: b.id,
          ds: [m, c, p].includes(n) ? n : b.ds === c ? m : c
        });
      break;
    }
    case "Region": {
      const c = r.getEmbeddedCollection(e), { ALWAYS: m, GAMEMASTER: p, LAYER: g } = foundry.CONST.REGION_VISIBILITY;
      i ??= g;
      for (const h of c) {
        if (!s.has(h.id))
          continue;
        const b = [m, p, g].includes(n) ? n : h.visibility, S = [m, p].includes(b) ? g : i;
        o.push({ _id: h.id, visibility: S });
        const x = [];
        for (const D of h.behaviors)
          x.push({
            _id: D.id,
            disabled: [m, p, g].includes(n) ? n : !D.disabled
          });
        u.push([h, "RegionBehavior", x]);
      }
      break;
    }
    default:
      throw new Error("Attempting to change unknown Document Type.");
  }
  const f = u.map(([c, m, p]) => c.updateEmbeddedDocuments(m, p));
  return await Promise.all(f), o.length ? r.updateEmbeddedDocuments(e, o) : [];
}

l(Bt, "toggleDocumentHiddenState");

async function K(a, s, e) {
  let t, n, i;
  return s.sceneId && ({ sceneId: s, ids: e, force: t, state: n, regionVisibility: i } = s), t ??= !1, Bt({
    sceneId: s,
    ids: e,
    type: a,
    force: t,
    state: n,
    regionVisibility: i
  });
}

l(K, "_toggleDocumentHiddenState");

async function Re({ sceneId: a, ambience: s, weather: e, darkness: t, force: n }) {
  if (!(a && canvas.scene?.id === a) && !n)
    return;
  const i = game.scenes.get(a);
  if (!i)
    return;
  const r = {};
  return s && (r.playlistSound = i.playlistSound.id === s.ambienceId1 ? s.ambienceId2 : s.ambienceId1), e && (r.weather = i.weather === e.weatherId1 ? e.weatherId2 : e.weatherId1), t && (r.environment.darknessLevel = i.environment.darknessLevel === t.darknessValue1 ? t.darknessValue2 : t.darknessValue1), i.update(r);
}

l(Re, "changeScene");

async function Yt(a, s, e) {
  let t;
  if (a.sceneId && ({ sceneId: a, tileId: s, states: e, force: t } = a), !(a && canvas.scene?.id === a) && !t)
    return;
  const n = game.scenes.get(a).tiles.get(s), i = n.updateSource(e[0], { dryRun: !0 }), r = foundry.utils.isEmpty(i);
  return n.update(r ? e[1] : e[0]);
}

l(Yt, "moveTile");

async function Xt(a, s, e, t, n) {
  a.sceneId && ({ sceneId: a, tileId: s, title: e, prompt: t, tileOptions: n } = a);
  const i = {};
  let r = t ? `<p>${t}</p>` : "";
  r += "<div class=\"form-footer custom-buttons flexcol\">";
  for (const { name: u, img: f } of n) {
    const c = foundry.utils.randomID();
    i[c] = f;
    const m = document.createElement("BUTTON");
    m.textContent = u, m.dataset.callback = c, m.type = "button", m.style.flex = "0 0 100%", r += m.outerHTML;
  }
  r += "</div>";
  const o = /* @__PURE__ */ l((u, f) => {
    for (const c of f.element.querySelectorAll(".custom-buttons button"))
      c.addEventListener("click", (m) => {
        const p = i[m.currentTarget.dataset.callback];
        return game.scenes.get(a).tiles.get(s).update({ "texture.src": p });
      });
  }, "render");
  return foundry.applications.api.Dialog.wait({
    content: r,
    render: o,
    buttons: [{ action: "ok", label: "Close", icon: "fa-solid fa-times" }],
    window: { title: e || "Change Tile Image" },
    position: { width: 400, height: "auto" }
  });
}

l(Xt, "pickTileImage");

async function Kt(a) {
  if (![0, 0.4, 1].includes(a)) {
    const s = {
        default: { alpha: 1, label: "Default Roofs" },
        transparent: { alpha: 0.4, label: "Transparent" },
        disabled: { alpha: 0, label: "Disabled" }
      }, e = Object.entries(s).map(([n, { label: i }]) => ({ action: n, label: i })),
      t = await foundry.applications.api.Dialog.wait({
        buttons: e,
        window: { title: "Change Roof Behavior" },
        content: "<p>Change the default opacity of roofs across all relevant scenes.</p>"
      });
    if (!t)
      return;
    a = s[t].alpha;
  }
  for (const s of game.scenes) {
    const e = s.tiles.filter((t) => t.getFlag("world", "isRoof")).map((t) => ({ _id: t.id, alpha: a }));
    await s.updateEmbeddedDocuments("Tile", e);
  }
  ui.notifications.info("Updated transparency of all scenes' roof tiles!");
}

l(Kt, "changeRoofOpacity");

function Qt() {
  Hooks.once("init", () => {
    game.settings.register(y, "safe-journal", {
      name: "Journal Freeze Workaround",
      hint: "Workaround for a Chrome issue that can cause all journals to freeze under certain circumstances.",
      scope: "client",
      config: !0,
      type: Boolean,
      default: !1,
      onChange: (a) => {
        a ? document.querySelectorAll(`.journal-sheet.${$}-wrapper`).forEach((s) => s.classList.add("safe-journal")) : document.querySelectorAll(`.journal-sheet.${$}-wrapper`).forEach((s) => s.classList.remove("safe-journal"));
      }
    });
  });
}

l(Qt, "safeJournalMode");

function Zt() {
  game.settings.register(y, "migrationVersion", {
    type: new foundry.data.fields.StringField({
      initial: "",
      blank: !0,
      label: "Migration Version",
      hint: "Current migration version of this module."
    }),
    scope: "world",
    config: !1
  });
}

l(Zt, "initializeSetting");
Hooks.once("init", Zt);
var ne, Je, B, ee;
const Qe = class Qe {
  constructor() {
    /* -------------------------------------------------- */
    /**
     * Set the current migration version in this world.
     */
    w(this, ne);
    /* -------------------------------------------------- */
    /**
     * The migration script. A module will assign its method here, which should accept
     * no parameters, and return a promise.
     * @type {Function|null}
     */
    w(this, B, null);
    /* -------------------------------------------------- */
    /**
     * A method used to conditionally negate the execution of a migration script. Modules should
     * use this to determine if a migration should be run despite any stored setting, or lack
     * thereof. Useful for migrations that are only recently introduced, if this explicitly
     * returns `false`, migration will not be performed. The method will receive no parameters.
     * @type {Function|null}
     */
    w(this, ee, null);
  }

  /**
   * The version of the module when migration was last performed.
   * @type {string}
   */
  get migrationVersion() {
    return game.settings.get(y, "migrationVersion");
  }

  /* -------------------------------------------------- */
  /**
   * The current migration version in the module. If the stored setting
   * is lower than this, a migration is needed. If this value is `null`,
   * this module has no relevant migrations.
   * @type {string|null}
   */
  get moduleMigrationVersion() {
    const s = game.modules.get(y).flags[y]?.migration?.version;
    return s || null;
  }

  /* -------------------------------------------------- */
  /**
   * A module requires migration if the module has a migration version
   * flag higher than the stored setting. If the module stores a method
   * for additional checking, this must also return anything but `false`.
   * @type {boolean}
   */
  get needsMigration() {
    const s = this.moduleMigrationVersion;
    if (!s)
      return !1;
    const e = this.migrationVersion;
    return !e && d(this, ee) instanceof Function && d(this, ee).call(this) === !1 ? !1 : !e || foundry.utils.isNewerVersion(s, e);
  }

  get script() {
    return d(this, B);
  }

  set script(s) {
    k(this, B, s);
  }

  set condition(s) {
    k(this, ee, s);
  }

  /* -------------------------------------------------- */
  /**
   * Perform the actual migration.
   */
  async performMigration() {
    if (game.users.activeGM?.isSelf) {
      if (!this.needsMigration) {
        v(this, ne, Je).call(this);
        return;
      }
      if (d(this, B) instanceof Function) {
        const s = game.modules.get(y).title, e = { permanent: !0 };
        ui.notifications.info(`Performing migration for ${s}. Please wait...`, e), await d(this, B).call(this), ui.notifications.info(`Migration for ${s} completed!`, e);
      }
      v(this, ne, Je).call(this);
    }
  }
};
ne = new WeakSet(), Je = /* @__PURE__ */ l(function () {
  const s = game.modules.get(y).version;
  game.settings.set(y, "migrationVersion", s);
}, "#setMigrationVersionToCurrent"), B = new WeakMap(), ee = new WeakMap(), l(Qe, "Migration");
let ze = Qe;
Hooks.once("init", () => {
  CONFIG.METAMORPHIC ??= {}, CONFIG.METAMORPHIC[y] ??= {}, CONFIG.METAMORPHIC[y].migration = new ze(), Hooks.once("ready", () => {
    CONFIG.METAMORPHIC[y].migration.performMigration();
  });
});
const es = {
  adventures: Nt,
  "distraction-free-mode": $t,
  "global-macro-helpers": zt,
  "safe-journal-mode": Qt
};
for (const [a, s] of Object.entries(es))
  _e?.[a] && s();
const ts = "modules/swade-core-rules/templates/importer.hbs";
var Ae, St, ie, Ge, De, It;
const Ze = class Ze extends foundry.appv1.sheets.AdventureImporter {
  constructor() {
    super(...arguments);
    /* -------------------------------------------------- */
    /*   Import Options                                   */
    /* -------------------------------------------------- */
    /**
     * Store on the adventure document whether a given import option is checked.
     * @param {Event} event     Initiating change event.
     */
    w(this, Ae);
    /* -------------------------------------------------- */
    /**
     * Set the import option.
     * @param {string} name       The name of the option.
     * @param {boolean} value     Whether it is enabled.
     */
    w(this, ie);
    /* -------------------------------------------------- */
    /**
     * Handle toggling the don't show again checkbox.
     * @param {Event} event  The change event.
     */
    w(this, De);
    /* -------------------------------------------------- */
    /**
     * Currently enabled import options.
     * @type {Set<string>}
     */
    T(this, "importOptions", /* @__PURE__ */ new Set());
  }

  /** @inheritdoc */
  static get defaultOptions() {
    const e = super.defaultOptions;
    return e.classes.push($), e;
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  get template() {
    return ts;
  }

  /* -------------------------------------------------- */
  /**
   * The flag data for metamorphic metadata.
   * @type {object}
   */
  get metamorphicMetadata() {
    const e = this.adventureModule.flags?.[y]?.adventureImporter?.[this.document.uuid];
    return e || {};
  }

  /**
   * The adventure module.
   * @type {Module}
   */
  get adventureModule() {
    const e = this.adventure.collection;
    return game.modules.get(e.metadata.packageName);
  }

  /* -------------------------------------------------- */
  /**
   * Retrieve the handlers for an import option.
   * @returns {object}    The object of handlers.
   */
  get importOptionsHandlers() {
    const e = this.adventureModule, t = this.metamorphicMetadata;
    return foundry.utils.isEmpty(t) ? {} : {
      initialSceneId: () => game.scenes.get(t.initialSceneId)?.activate(),
      displayJournal: () => game.journal.get(t.initialJournalEntryId)?.sheet.render(!0, { pageId: t.initialJournalPageId }),
      customizeJoin: async () => {
        const n = {
          id: game.world.id,
          action: "editWorld",
          description: e.description,
          background: `modules/${e.id}/${t.initialLoginScreenBackground}`
        }, i = await foundry.utils.fetchJsonWithTimeout(foundry.utils.getRoute("setup"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n)
        });
        game.world.updateSource(i);
      },
      chatMessage: () => ChatMessage.implementation.create({
        content: t.chatMessage.content,
        whisper: ChatMessage.implementation.getWhisperRecipients("GM")
      })
    };
  }

  /* -------------------------------------------------- */
  /**
   * Execute an Adventure import workflow, creating and updating documents in the World.
   * @this {Adventure}
   * @param {...*} args                         Prepared adventure data to import
   * @returns {Promise<AdventureImportResult>}  The import result
   */
  static async importContentImplementation(...e) {
    const t = await Adventure.prototype.importContent.call(this, ...e), n = this.sheet.importOptionsHandlers;
    for (const o of this.sheet.importOptions) {
      const u = n[o];
      typeof u == "function" && await u.call(this);
    }
    const r = this.collection.metadata.packageName;
    return game.settings.settings.has(`${r}.firstStartup`) && await game.settings.set(r, "firstStartup", !1), t;
  }

  /* -------------------------------------------------- */
  /**
   * Prepare Adventure data for import into the World.
   * @this {Adventure}
   * @param {object} [options]                 Options passed in from the import dialog to configure the import behavior.
   * @param {string[]} [options.importFields]  A subset of adventure fields to import.
   * @returns {Promise<AdventureImportData>}   Adventure import data.
   */
  static async prepareImportImplementation({ importFields: e = [] } = {}) {
    const t = await Adventure.prototype.prepareImport.call(this, { importFields: e }), {
      toCreate: n,
      toUpdate: i,
      ...r
    } = t;
    this.sheet.removeUnwantedContent(e, { toCreate: n, toUpdate: i });
    for (const o of [n, i])
      await this.sheet.applyImportActorChanges(o.Actor), await this.sheet.applyImportItemChanges(o.Item), await this.sheet.applyImportSceneChanges(o.Scene), await this.sheet.applyImportJournalEntryChanges(o.JournalEntry);
    return { toCreate: n, toUpdate: i, ...r };
  }

  /* -------------------------------------------- */
  /** @inheritDoc */
  async getData(e = {}) {
    const t = await super.getData(), n = this.adventureModule, i = foundry.applications.ux.TextEditor.implementation;
    t.description = await i.enrichHTML(this.document.description);
    const r = this._getImportOptions();
    return t.importOptions = r, t.hasImportOptions = !foundry.utils.isEmpty(t.importOptions), game.settings.settings.has(`${n.id}.firstStartup`) && (t.showDontShowAgain = !0, t.dontShowAgain = !game.settings.get(n.id, "firstStartup")), t.changelog = n.changelog, t;
  }

  /* -------------------------------------------------- */
  /**
   * The import options available for this importer.
   * @returns {Record<string, ImportOptionConfig>}      The import options.
   */
  _getImportOptions() {
    const e = this.metamorphicMetadata, t = {};
    return e.initialSceneId && (t.initialSceneId = {
      label: "Activate Initial Scene",
      default: !0
    }), e.initialJournalEntryId && e.initialJournalPageId && (t.displayJournal = {
      label: "Display Introduction Journal Entry",
      default: !0
    }), e.initialLoginScreenBackground && (t.customizeJoin = {
      label: "Style Login Screen",
      default: !1
    }), e.chatMessage?.label && e.chatMessage.content && (t.chatMessage = {
      label: e.chatMessage.label,
      default: !0
    }), t;
  }

  /* -------------------------------------------------- */
  /** @inheritDoc */
  activateListeners(e) {
    super.activateListeners(e);
    const t = e[0];
    for (const i of t.querySelectorAll("input[name=\"dontShowAgain\"]"))
      i.addEventListener("change", v(this, De, It).bind(this));
    const n = Object.keys(this._getImportOptions());
    for (const i of t.querySelectorAll("input[name]"))
      n.includes(i.name) && (v(this, ie, Ge).call(this, i.name, i.checked), i.addEventListener("change", v(this, Ae, St).bind(this)));
    t.querySelectorAll(".changelog-link").forEach(
      (i) => i.addEventListener("click", (r) => {
        r.preventDefault(), r.stopPropagation(), window.open(this.adventureModule.changelog, "_blank").focus();
      })
    );
  }

  /* -------------------------------------------------- */
  /** @inheritdoc */
  render(e = !1, t = {}) {
    const n = super.render(e, t);
    return e && (this.document.importContent = this.constructor.importContentImplementation.bind(
      this.document
    ), this.document.prepareImport = this.constructor.prepareImportImplementation.bind(
      this.document
    )), n;
  }

  /* -------------------------------------------------- */
  /**
   * Going by the checked boxes, remove some content from the creations and updates, as well as folders.
   * @param {string[]} fields               The collection names of documents that will be imported.
   * @param {AdventureImportData} data      Prepared adventure data to import.
   */
  removeUnwantedContent(e, { toCreate: t, toUpdate: n }) {
    if (e = e.filter((r) => r), e.push("folders"), e.includes("all"))
      return;
    const i = new Set(e.map((r) => Adventure.contentFields[r].documentName));
    for (const r of [t, n]) {
      for (const o of Object.keys(r))
        i.has(o) || delete r[o];
      r.Folder && (r.Folder = r.Folder.filter((o) => i.has(o.type)));
    }
  }

  /* -------------------------------------------------- */
  /*   Import Modifications                             */

  /* -------------------------------------------------- */
  /**
   * Perform modificatons to actor data prior to importing.
   * @param {object[]} [actorData]      The actor data.
   * @abstract
   */
  async applyImportActorChanges(e) {
  }

  /* -------------------------------------------------- */
  /**
   * Perform modifications to item data prior to importing.
   * @param {object[]} [itemData]     The item data.
   * @abstract
   */
  async applyImportItemChanges(e) {
  }

  /* -------------------------------------------------- */
  /**
   * Perform modifications to journal entry data prior to importing.
   * @param {object[]} [journalData]      The journal entry data.
   * @abstract
   */
  async applyImportJournalEntryChanges(e) {
  }

  /* -------------------------------------------------- */
  /**
   * Perform modifications to scene data prior to importing.
   * @param {object[]} [sceneData]      The scene data.
   */
  async applyImportSceneChanges(e) {
  }
};
Ae = new WeakSet(), St = /* @__PURE__ */ l(function (e) {
  const t = e.currentTarget.name, n = e.currentTarget.checked;
  v(this, ie, Ge).call(this, t, n);
}, "#onChangeImportOption"), ie = new WeakSet(), Ge = /* @__PURE__ */ l(function (e, t) {
  t ? this.importOptions.add(e) : this.importOptions.delete(e);
}, "#setImportOption"), De = new WeakSet(), It = /* @__PURE__ */ l(function (e) {
  game.settings.set(y, "firstStartup", !e.currentTarget.checked);
}, "#onToggleDontShowAgain"), l(Ze, "SigilAdventureImporter");
let qe = Ze;
Hooks.once("init", () => {
  if (H.flags?.sigil?.registerSigilAdventureSheet === !1)
    return;
  const a = foundry.applications?.apps?.DocumentSheetConfig ?? DocumentSheetConfig,
    s = foundry.documents?.Adventure ?? Adventure;
  a.registerSheet(s, y, qe, {
    label: `${re} Importer`,
    makeDefault: !1
  });
});
const et = class et extends (foundry.applications?.sheets?.journal?.JournalEntryPageImageSheet ?? JournalImagePageSheet) {
};
l(et, "SigilJournalSheetImagePage");
let le = et;
const ss = "modules/swade-core-rules/templates/page-edit.hbs", as = "modules/swade-core-rules/templates/page-view.hbs";
var Te, At, Pe, Dt, Oe, Tt;
const tt = class tt extends foundry.appv1.sheets.JournalTextPageSheet {
  constructor() {
    super(...arguments);
    /* -------------------------------------------------- */
    /**
     * Initiate a dialog prompt to configure which users to whisper a message to.
     * @this {JournalEntry}
     * @param {SpeakAloudMessageOptions} options      Speak-aloud options.
     */
    w(this, Te);
    /* -------------------------------------------------- */
    /**
     * @this {SigilJournalSheetPage}
     * @param {PointerEvent} event      Initiating click event.
     */
    w(this, Pe);
    /* -------------------------------------------------- */
    /**
     * @this {SigilJournalSheetPage}
     * @param {PointerEvent} event      Initiating click event.
     */
    w(this, Oe);
  }

  /** @override */
  get template() {
    return this.isEditable ? ss : as;
  }

  /* -------------------------------------------------- */
  /** @override */
  activateListeners(e) {
    super.activateListeners(e), e = e[0];
    for (const t of e.querySelectorAll(".read-aloud"))
      t.addEventListener("click", v(this, Pe, Dt).bind(this));
    if (game.user.isGM)
      for (const t of e.querySelectorAll("a.content-link[data-type=Scene]"))
        t.addEventListener("click", v(this, Oe, Tt).bind(this));
    this?.document?.parent?.flags?.sigil?.variations && e.querySelectorAll("[data-option][data-variation]").forEach((t) => {
      const n = t.dataset.variation, i = t.dataset.option, r = this.document.parent.flags.sigil.variations.find(
        (o) => o.name === n
      )?.option;
      r && i !== r && (t.style.display = "none");
    });
  }
};
Te = new WeakSet(), At = /* @__PURE__ */ l(async function (e) {
  if (!this.isOwner) {
    ui.notifications.error("JOURNAL.ShowBadPermissions", { localize: !0 });
    return;
  }
  const { BooleanField: t, SetField: n, StringField: i } = foundry.data.fields, r = new t().toFormGroup(
    {
      label: game.i18n.localize("OWNERSHIP.AllPlayers"),
      hint: "Whisper to all players rather than a select few.",
      rootId: foundry.utils.randomID()
    },
    { name: "all", value: !0 }
  ).outerHTML, o = new n(new i()).toFormGroup(
    { label: "Players", classes: ["stacked"] },
    {
      name: "players",
      type: "checkboxes",
      options: game.users.reduce((m, p) => (p === game.user || m.push({
        value: p.id,
        label: p.name,
        selected: p.active
      }), m), []),
      disabled: !0
    }
  ).outerHTML, u = `
    <fieldset>
      <legend>${game.i18n.localize("JOURNAL.ShowTo")}</legend>
      ${r}
      ${o}
    </fieldset>`, f = /* @__PURE__ */ l((m, p) => {
    const [g, h] = p.querySelectorAll("[name=all], [name=players]");
    g.addEventListener("change", (b) => h.disabled = g.checked);
  }, "render"), c = /* @__PURE__ */ l((m, p) => {
    const g = new foundry.applications.ux.FormDataExtended(p.form).object,
      h = g.all || !g.players.length ? [] : g.players, b = game.actors.get(e.speakerId) ?? void 0;
    ChatMessage.implementation.create({
      whisper: h,
      content: e.content,
      speaker: b ? ChatMessage.implementation.getSpeaker({ actor: b }) : void 0
    });
  }, "callback");
  foundry.applications.api.Dialog.prompt({
    render: f,
    ok: { label: "Whisper", callback: c, icon: "fa-solid fa-check" },
    content: u,
    position: { width: 400, height: "auto" },
    window: { title: "Speak Aloud Message", icon: "fa-solid fa-comment" }
  });
}, "#showWhisperDialog"), Pe = new WeakSet(), Dt = /* @__PURE__ */ l(async function (e) {
  if (e.preventDefault(), ["IMG", "A"].includes(e.target.tagName))
    return;
  const t = e.currentTarget.dataset.speakerId,
    i = `<div data-sigil-chatable class="${e.currentTarget.dataset.speakerClasses || ""}">${e.currentTarget.innerHTML}</div>`;
  v(this, Te, At).call(this.document.parent, { content: i, speakerId: t });
}, "#onClickReadAloud"), Oe = new WeakSet(), Tt = /* @__PURE__ */ l(async function (e) {
  e.preventDefault();
  const t = e.currentTarget;
  if (!t.dataset.uuid.startsWith("Scene"))
    return;
  const n = game.scenes.get(t.dataset.id);
  n && (e.stopPropagation(), n.view(), n.journal?.sheet?.render(!0, { pageId: n.journalEntryPage }));
}, "#onClickContentLink"), l(tt, "SigilJournalSheetPage");
let ce = tt;
const ns = "modules/swade-core-rules/templates/journal.hbs",
  st = class st extends (foundry.appv1?.sheets?.JournalSheet ?? JournalSheet) {
    /** @inheritdoc */
    static get defaultOptions() {
      const s = {
        classes: ["sheet", "journal-sheet", "journal-entry", `${$}-wrapper`],
        width: window.innerWidth < 800 ? 720 : 960,
        height: window.innerHeight < 1e3 ? 700 : 800
      };
      return _e?.["distraction-free-mode"] && game.settings.get(y, "distraction-free") && s.classes.push("distraction-free"), _e?.["safe-journal-mode"] && game.settings.get(y, "safe-journal") && s.classes.push("safe-journal"), foundry.utils.mergeObject(super.defaultOptions, s);
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    get template() {
      return ns;
    }

    /** @inheritdoc */
    async getData(s) {
      const e = await super.getData(s);
      e.cssClass = $;
      let t = this?.document?.flags?.sigil?.additionalCssClass;
      return typeof t == "string" && (t = t.split(" ")), Array.isArray(t) && (typeof this?.document?.flags[y]?.additionalCssClass == "string" && t.push(this.document.flags[y].additionalCssClass.split(" ")), typeof this?.document?.flags[y]?.additionalCssClass == "string" && t.push(this.document.flags[y].additionalCssClass.split(" ")), Array.isArray(this?.document?.flags[y]?.additionalCssClass) && t.push(this.document.flags[y].additionalCssClass), t && (e.cssClass = [$, ...t].join(" "))), e;
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    _getPageData() {
      let s = 1;
      return super._getPageData().map((e) => (e?.flags[y]?.pageNumber ? (e.number = e.flags[y].pageNumber, typeof e?.flags[y]?.pageNumber == "number" && (s = e.number + 1)) : e.number = s++, e?.flags[y]?.pageNumberClass && (e.pageNumberClass = e.flags[y].pageNumberClass ?? ""), e.editable = e.editable && e?.flags[y]?.editable, e.cssClasses = [
        this.cssClass,
        e?.flags?.sigil?.additionalCssClass,
        e.flags[y]?.additionalCssClass
      ].join(" "), e));
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    async _renderHeadings(s, e) {
      return Object.entries(e || {}).forEach(([t, n]) => {
        n.element.classList.contains("no-toc") && delete e[t];
        const i = n.element?.querySelectorAll("span");
        i.length > 0 && (n.text = i[0].textContent);
      }), super._renderHeadings(s, e);
    }

    /* -------------------------------------------------- */
    /*   Special event handlers                           */

    /* -------------------------------------------------- */
    /**
     * Apply workaround for chrome issue.
     * @param {PointerEvent} event    The initiating pointer event.
     */
    _onResizeMouseDown(s) {
      this._chromeShapeOutsideFreezeWorkaround(!0);
    }

    /* -------------------------------------------------- */
    /**
     * Apply workaround for chrome issue.
     * @param {PointerEvent} event    The initiating pointer event.
     */
    _onResize(s) {
      this._onResizeMouseUp(s);
    }

    /* -------------------------------------------------- */
    /**
     * Apply workaround for chrome issue.
     * @param {PointerEvent} event    The initiating pointer event.
     */
    _onResizeMouseUp(s) {
      this._chromeShapeOutsideFreezeWorkaround(!1);
    }

    /* -------------------------------------------------- */
    /**
     * Apply workaround for chrome issue.
     * @param {boolean} toggle    Whether to toggle a class.
     */
    _chromeShapeOutsideFreezeWorkaround(s) {
      this.element[0].classList.toggle("resizing", s);
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    async minimize() {
      !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.minimize());
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    async maximize() {
      !this.popOut || [!1, null].includes(this._minimized) || (await super.maximize(), this._chromeShapeOutsideFreezeWorkaround(!1));
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    async close() {
      !this.rendered || !this.popOut || [!0, null].includes(this._minimized) || (this._chromeShapeOutsideFreezeWorkaround(!0), await super.close());
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    async _renderOuter() {
      const s = await super._renderOuter();
      return s.find("div.window-resizable-handle")[0].addEventListener("pointerdown", this._onResizeMouseDown.bind(this)), s;
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    async _render(s = !1, e = {}) {
      let t = this?.document?.flags?.sigil?.additionalCssClass ?? this?.document?.flags[y]?.additionalCssClass;
      if (typeof t == "string" && (t = t.split(" ")), e.classes = e.classes || this.constructor.defaultOptions.classes, Array.isArray(t))
        for (const o of t)
          e.classes.includes(o + "-wrapper") || e.classes.push(o + "-wrapper");
      if (e.action === "update" && this._state !== Application.RENDER_STATES.NONE && JSON.stringify(this.options.classes) !== JSON.stringify(e.classes))
        return this.close();
      const n = await super._render(s, e);
      if ("scrollTag" in e) {
        this._scrollPositions ??= {};
        const o = this._scrollPositions[".scrollable"] ??= [],
          u = this.element[0].querySelector(`[data-scroll='${e.scrollTag}']`)?.offsetTop;
        if (!u)
          return;
        o.length ? o[1] = u : o.push(0, u), this._restoreScrollPositions(this.element);
      }
      const { backward: i, forward: r } = this.document.getFlag(y, "navigation") ?? {};
      if (i || r) {
        const [o, u] = await Promise.all(
          [i, r].map((p) => fromUuid(p))
        ), f = this.element[0].querySelector(".journal-entry-content .journal-header"), c = "toc-navigation";
        if (f.querySelector(c))
          return;
        const m = document.createElement("NAV");
        if (m.classList.add(c), o) {
          const p = document.createElement("A");
          p.innerHTML = `<i class="fas fa-arrow-left"></i> ${o.name}`, p.classList.add("backward"), p.dataset.tooltipDirection = "LEFT", p.dataset.tooltip = "Previous", p.dataset.uuid = o.uuid, m.insertAdjacentElement("afterbegin", p);
        }
        if (u) {
          const p = document.createElement("A");
          p.innerHTML = `${u.name} <i class="fas fa-arrow-right"></i>`, p.classList.add("forward"), p.dataset.tooltipDirection = "RIGHT", p.dataset.tooltip = "Next", p.dataset.uuid = u.uuid, m.insertAdjacentElement("beforeend", p);
        }
        f.insertAdjacentElement("afterend", m);
        for (const p of m.querySelectorAll(".backward, .forward"))
          p.addEventListener("click", async (g) => {
            const h = g.currentTarget.dataset.uuid;
            (await fromUuid(h)).sheet.render(!0);
          });
      }
      return n;
    }

    /* -------------------------------------------------- */
    /** @inheritdoc */
    _contextMenu(s) {
      return s instanceof HTMLElement || (s = s[0]), super._contextMenu(s);
    }
  };
l(st, "SigilJournalSheet");
let de = st;
Hooks.once("init", () => {
  Object.defineProperty(de, "name", {
    value: `${Me}`
  }), Object.defineProperty(ce, "name", {
    value: `${Me}Page`
  }), Object.defineProperty(le, "name", {
    value: `${Me}ImagePage`
  }), DocumentSheetConfig.registerSheet(JournalEntry, y, de, {
    types: ["base"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${re}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, y, ce, {
    types: ["text"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${re}`
  }), DocumentSheetConfig.registerSheet(JournalEntryPage, y, le, {
    types: ["image"],
    makeDefault: !1,
    canBeDefault: !1,
    label: `${re}`
  });
});
const rt = "swade-core-rules", ot = "tempedges";

function is() {
  Hooks.on("deleteActiveEffect", function (a, s, e) {
    if (game.user.id !== e)
      return;
    const t = a.getFlag(rt, ot);
    if (!t || !(a.parent instanceof Actor))
      return;
    const [n] = Object.entries(t).find(([, r]) => r === !0) ?? [];
    if (!n)
      return;
    const i = a.parent.items.filter((r) => r.getFlag(rt, `${ot}.${n}`)).map((r) => r.id);
    i.length && (a.parent.deleteEmbeddedDocuments("Item", i), ui.notifications.info(`${a.parent.name}'s temporary Edges removed.`));
  });
}

l(is, "registerDeleteEffectHook");
const Y = "swade-core-rules";
Hooks.once("init", () => {
  game.swade.effectCallbacks.set("perish", rs), game.settings.register(Y, "addBasicActions", {
    name: "Add Basic Actions to New Characters",
    hint: "Create basic actions such as Jump or Disarm on new characters",
    scope: "world",
    config: !0,
    requiresReload: !1,
    type: Boolean,
    default: !0
  }), game.settings.register(Y, "enableChi", {
    name: "Enable Chi",
    hint: "Adds Chi as an additional stat (enable in Tweaks)",
    scope: "world",
    config: !0,
    type: Boolean,
    default: !0
  });
  const a = game.modules.get(Y).api ??= {};
  a.applications ??= {}, a.applications.SwadeBuilder = X, a.applications.SwadeBuilderComponent = oe;
});

async function rs(a) {
  const s = a.parent;
  if (!s || s instanceof CONFIG.Item.documentClass)
    return;
  ChatMessage.create({
    content: `${s.name} has perished from ${a.name}`,
    speaker: { actor: s.id }
  });
  const e = game.swade.util.getStatusEffectDataById("incapacitated");
  e.label = "Perished", s.toggleActiveEffect(e, { overlay: !0, active: !0 });
}

l(rs, "perish");
Hooks.on("ready", async () => {
  for (const a of game.packs.contents)
    a.collection.includes(Y) && a.getIndex();
  if (os(), game.settings.get(Y, "enableChi")) {
    const a = foundry.utils.deepClone(game.settings.get("swade", "settingFields"));
    if (!a.actor?.chi) {
      const s = {
        actor: {
          chi: {
            label: "Chi",
            dtype: "Number",
            hasMaxValue: !1
          }
        }
      }, e = foundry.utils.mergeObject(a, s, { inplace: !1 });
      game.settings.set("swade", "settingFields", e);
    }
  }
});

async function os() {
  game.swade.util.getStatusEffectDataById("shaken").description = `<article class="swade-core">
    <p>Shaken characters are nicked, bruised, or otherwise rattled. They may only take @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03actions0000000]{free actions}, such as @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03movement000000]{moving} (including running). At the start of their turn, Shaken characters must attempt to recover from being Shaken by making a @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01traits00000000]{Spirit} roll. This is a free action.</p>
    <ul class="red-bullet-list">
    <li><strong>FAILURE: </strong>The character remains Shaken. She can only perform free actions.</li>
    <li><strong>SUCCESS: </strong>The character is no longer Shaken and may act normally.</li>
    </ul>
    <p><strong>Spending Bennies: </strong>A player may spend a @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03bennies0000000]{Benny} at any time to remove her Shaken status (even when it’s not her turn).</p>
  </article>`, game.swade.util.getStatusEffectDataById("incapacitated").description = `<article class="swade-core">
    <p>Incapacitated characters may not perform actions but are still dealt Action Cards for the remainder of the encounter in case they recover or must roll for other effects such as <strong>Bleeding Out</strong> (below). @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01edges000000000]{Edges} or @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01hindrances0000]{Hindrances} that affect card draws, such as @Compendium[swade-core-rules.swade-edges.Quick]{Quick}, @Compendium[swade-core-rules.swade-edges.Level Headed]{Level Headed}, or @Compendium[swade-core-rules.swade-hindrances.Hesitant]{Hesitant} are ignored when the hero is Incapacitated.</p>
    <p>If Incapacitated by damage or injury, he must make an immediate @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01traits00000000]{Vigor} roll:</p>
    <ul class="red-bullet-list">
    <li><strong>CRITICAL FAILURE: </strong>The character dies.</li>
    <li><strong>FAILURE: </strong>Roll on the <strong>@Compendium[swade-core-rules.swade-tables.Injury Table]{Injury Table}</strong>. The Injury is permanent and the character is <strong>Bleeding Out</strong>, see below.</li>
    <li><strong>SUCCESS: </strong>Roll on the <strong>Injury Table</strong>. The Injury goes away when all Wounds are healed.</li>
    <li><strong>RAISE: </strong>Roll on the <strong>Injury Table</strong>. The Injury goes away in 24 hours, or when all Wounds are healed (whichever is sooner).</li>
    </ul>
    <p>Characters cannot take actions and might be unconscious (GM’s call). The victim makes a @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01traits00000000]{Vigor} roll each day thereafter and is no longer Incapacitated (or unconscious) if successful. They may also heal Wounds during this time (see <strong>@UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03healing0000000]{Healing}</strong>).</p>
    <p><strong>Bleeding Out:</strong> The injured character is dying and must make a @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01traits00000000]{Vigor} roll at the start of his turn. Failure means he perishes. With success he survives but must roll again next turn (or every minute if not in combat). With a raise, he stabilizes and no further rolls are required</p>
    <p>Other characters may stop a victim’s bleeding by making a @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03healing0000000]{Healing} roll. This is an action, and if successful the patient is stabilized.</p>
    <p>The healing power can also stabilize Wounds, as can a successful “natural” healing roll by a being with regeneration of some sort.</p>
    <p><strong>Incapacitation from Fatigue: </strong> See @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03fatigue0000000]{Fatigue}.</p>
  </article>`, game.swade.util.getStatusEffectDataById("bleeding-out").description = `<article class="swade-core">
    <p><strong>Bleeding Out:</strong> The injured character is dying and must make a @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01traits00000000]{Vigor} roll at the start of his turn. Failure means he perishes. With success he survives but must roll again next turn (or every minute if not in combat). With a raise, he stabilizes and no further rolls are required</p>
    <p>Other characters may stop a victim’s bleeding by making a @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03healing0000000]{Healing} roll. This is an action, and if successful the patient is stabilized.</p>
    <p>The healing power can also stabilize Wounds, as can a successful “natural” healing roll by a being with regeneration of some sort.</p>
  </article>`, game.swade.util.getStatusEffectDataById("berserk").description = (await fromUuid("Compendium.swade-core-rules.swade-edges.Item.Xv6TAc0VcnkEqt20.ActiveEffect.1UkpIwduU7EtkEGz"))?.description, game.swade.util.getStatusEffectDataById("encumbered").description = `<article class="swade-core">
    <p>Most of the time you don’t need to worry about how much weight a character is carrying. If it becomes important to track, use the <strong>Encumbrance Levels</strong> table below. If a character carries more than the listed weight, he’s Encumbered.</p>
    <p>Encumbered characters subtract 2 from @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03movement000000]{Pace} (minimum 1″), running rolls, Agility and all linked skills, and Vigor rolls made to resist <strong>@UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03fatigue0000000]{Fatigue}</strong>.</p>
    <p>At three times the lifted weight or more, he can move at a @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03movement000000]{Pace} of 1 for a number of rounds equal to his Vigor. Every round thereafter he must succeed at a Vigor roll or take a level of Fatigue.</p>
    <p>The maximum weight a character can lift or carry is four times the listed weight.</p>
    <table class="table list-table" style="width: 33%;"><caption class="table-caption">
    <h2 class="table-title">Encumbrance</h2>
    </caption>
    <tbody>
    <tr class="table-header-row">
    <th class="table-column-header" scope="col">Strength</th>
    <th class="table-column-header" scope="col">Can carry weight up to...</th>
    </tr>
    </tbody>
    <tbody>
    <tr>
    <td>d4</td>
    <td>20 lbs</td>
    </tr>
    <tr>
    <td>d6</td>
    <td>40 lbs</td>
    </tr>
    <tr>
    <td>d8</td>
    <td>60 lbs</td>
    </tr>
    <tr>
    <td>d10</td>
    <td>80 lbs</td>
    </tr>
    <tr>
    <td>d12</td>
    <td>100 lbs</td>
    </tr>
    <tr>
    <td>Each +1</td>
    <td>+20 lbs</td>
    </tr>
    </tbody>
    </table>
    <p><strong>Bulky Items: </strong>Carrying a bulky, awkward, or unbalanced item, such as a large box, treasure chest, a person, and so on, may make a character Encumbered despite its actual weight (GM’s call).</p>
  </article>`, game.swade.util.getStatusEffectDataById("frightened").description = `<article class="swade-core">
    <p>The character gains the @Compendium[swade-core-rules.swade-hindrances.Hesitant]{Hesitant} @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01hindrances0000]{Hindrance} for the remainder of the encounter. If he already has it, he’s Panicked instead.</p>
  </article>`, game.swade.util.getStatusEffectDataById("heart-attack").description = `<article class="swade-core">
    <p>The hero is so over­whelmed with fear that his heart stutters. He must make an immediate @UUID[Compendium.swade-core-rules.swade-rules.swadecor01charac.JournalEntryPage.01traits00000000]{Vigor} roll at –2. If successful, he’s @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03stunned0000000]{Stunned}. If he fails, he’s @UUID[Compendium.swade-core-rules.swade-rules.swadecor03rules0.JournalEntryPage.03damageeffect00]{Incapacitated} and dies in 2d6 rounds. In the latter case, a @Compendium[swade-core-rules.swade-skills.Healing]{Healing} roll at –4 saves his life, but he remains Incapacitated. He may be treated normally thereafter.</p>
  </article>`;
  const a = {
    aiming: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03aim00000000000",
    "wild-attack": "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03wildattack0000",
    defending: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03defend00000000",
    holding: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03hold0000000000",
    bound: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03boundandenta00",
    entangled: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03boundandenta00",
    distracted: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03distractedan00",
    vulnerable: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03distractedan00",
    prone: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03prone000000000",
    stunned: "Compendium.swade-core-rules.swade-rules.JournalEntry.swadecor03rules0.JournalEntryPage.03stunned0000000"
  };
  for (const [s, e] of Object.entries(a))
    game.swade.util.getStatusEffectDataById(s).description = `<article class="swade-core">${(await fromUuid(e))?.text.content.replace(/<h2>[^<]+<\/h2>/, "")}</article>`;
}

l(os, "updateStatusEffectDescriptions");
Hooks.on("createActor", async (a, s, e) => {
  if (game.user !== game.users.activeGM && game.users.filter((h) => h.active).length > 1 || !game.settings.get(Y, "addBasicActions") || a.type !== "character" || a._stats.duplicateSource)
    return;
  const t = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.An9n5sDP9ldAWQmP"),
    n = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.m2qelopR0MHxX1FG"),
    i = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.gxg58JUxI1kL79sw"),
    r = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.oCur3DfT2ETIQ2WV"),
    o = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.7jgUTRAhXFhYaJmp"),
    u = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.YVraD4ql4093i6rV"),
    f = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.169yyrjFMEmIynUz"),
    c = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.TluD4qIwifJGpyZp"),
    m = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.DYz0dETXIBE02wz4"),
    p = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.EYXIgOMg5UhRhpdC"),
    g = await fromUuid("Compendium.swade-core-rules.swade-actions.Item.EoSaEiH89P5Xi8He");
  a.createEmbeddedDocuments("Item", [
    game.items.fromCompendium(t),
    game.items.fromCompendium(n),
    game.items.fromCompendium(i),
    game.items.fromCompendium(r),
    game.items.fromCompendium(o),
    game.items.fromCompendium(u),
    game.items.fromCompendium(f),
    game.items.fromCompendium(c),
    game.items.fromCompendium(m),
    game.items.fromCompendium(p),
    game.items.fromCompendium(g)
  ]);
});
Hooks.on("preCreateItem", ls);

function ls(a, s, e) {
  const t = a.getFlag(Y, "abilityGrant");
  if (t) {
    const n = /<article[^>]*>/, i = a.system.description.match(n);
    let r = "";
    i ? r = i.input.replace(i, i + t) : r = t + a.system.description, a.updateSource({ "system.description": r });
  }
}

l(ls, "itemInjection");
Hooks.on("createChatMessage", (a, s, e) => {
  a.getFlag("core", "RollTable") === "fRhZBtWUt3kKkbCd" && Hooks.once("renderChatMessage", cs);
});

function cs(a, s, e) {
  if (a.getFlag("core", "RollTable") !== "fRhZBtWUt3kKkbCd")
    return;
  const t = a.rolls[0].total, n = a.speakerActor;
  if (n)
    switch (t) {
      case 2:
        break;
      case 3:
      case 4:
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9: {
        const r = s.find(".swade-core")[1].textContent.split(" "), o = r[2].toLowerCase();
        n.createEmbeddedDocuments("ActiveEffect", [
          {
            name: r[0] + " Guts",
            changes: [
              {
                key: `system.attributes.${o}.die.sides`,
                mode: 2,
                value: "-2"
              }
            ],
            description: "<article class=\"swade-core\"><p>" + r.slice(2).join(" ") + "</p></article>",
            flags: {
              swade: {
                favorite: !0
              }
            }
          }
        ]);
        break;
      }
      case 10:
      case 11:
        const i = n.items.getName("Slow");
        if (i) {
          i.update({ "system.major": !0 });
          const r = i.effects.getName("Slow (Minor)"), o = i.effects.getName("Slow (Major)");
          o && r && (r.update({ disabled: !0 }), o.update({ disabled: !1 }));
        } else
          Ue("Compendium.swade-core-rules.swade-hindrances.Item.fcpi7DwrE1aFc8iW", !1, n);
        break;
      case 12:
        switch (s.find(".swade-core").text().split(" ")[0]) {
          case "Hideous":
            Ue("Compendium.swade-core-rules.swade-hindrances.Item.cgKdIeU474Fy2LFh", !0, n);
            break;
          case "Blinded:":
            const u = n.items.getName("One Eye") ? "Compendium.swade-core-rules.swade-hindrances.Item.6JQGOwz8OrGf4VMX" : "Compendium.swade-core-rules.swade-hindrances.Item.HOh80N3mCwwj3HqL";
            Ue(u, !1, n);
            break;
          case "Brain":
            n.createEmbeddedDocuments("ActiveEffect", [
              {
                name: "Brain Damage",
                changes: [
                  {
                    key: "system.attributes.smarts.die.sides",
                    mode: 2,
                    value: "-2"
                  }
                ],
                description: "<article class=\"swade-core\"><p>Massive trauma to the head. Smarts reduced one die type (min d4).</p></article>",
                flags: {
                  swade: {
                    favorite: !0
                  }
                }
              }
            ]);
        }
    }
}

l(cs, "applyInjuryTable");

async function Ue(a, s, e) {
  const t = await fromUuid(a), n = game.items.fromCompendium(t);
  s && (n.system.major = !0), e.createEmbeddedDocuments("Item", [n]);
}

l(Ue, "giveHindrance");
is();

async function ds() {
  if (canvas.tokens.controlled.length !== 1) {
    ui.notifications.error("Please select a single token first.");
    return;
  }
  const a = canvas.tokens.controlled[0].actor;
  if (!a) {
    ui.notifications.error("The selected token has no associated actor.");
    return;
  }
  const s = a.items.reduce((m, p) => (p.type === "weapon" && (m[p.id] = p.name), m), {});
  if (foundry.utils.isEmpty(s)) {
    ui.notifications.warn("The selected actor has no weapons.");
    return;
  }
  const { BooleanField: e, NumberField: t, StringField: n } = foundry.data.fields, i = new n({
    label: "Weapon",
    required: !0,
    choices: s
  }).toFormGroup({}, { name: "weaponId" }).outerHTML, r = new t({
    label: "Damage Modifier",
    min: 2,
    max: 6,
    step: 2,
    nullable: !1
  }).toFormGroup({}, { name: "damageModifier", value: 0 }).outerHTML, o = new t({
    label: "Armor Piercing Modifier",
    min: 0,
    max: 6,
    step: 2,
    nullable: !1
  }).toFormGroup({}, { name: "armorPierce", value: 0 }).outerHTML, u = new e({
    label: "Heavy Weapon"
  }).toFormGroup({}, { name: "isHeavy" }).outerHTML, f = [
    "<p>Select the weapon and modifiers for Smite.</p>",
    "<fieldset>",
    i,
    r,
    o,
    u,
    "</fieldset>"
  ].join("");

  async function c(m, p) {
    const { FormDataExtended: g } = foundry.applications.ux, h = new g(p.form).object,
      b = a.items.get(h.weaponId), { ADD: S, OVERRIDE: x } = CONST.ACTIVE_EFFECT_MODES, D = [
        { key: `@Weapon{${b.name}}[system.actions.dmgMod]`, mode: S, value: h.damageModifier },
        { key: `@Weapon{${b.name}}[system.isHeavyWeapon]`, mode: x, value: h.isHeavy }
      ];
    h.armorPierce && D.push({ key: `@Weapon{${b.name}}[system.ap]`, mode: S, value: h.armorPierce });
    const Pt = {
      name: "Smite Modifiers",
      img: "icons/svg/sword.svg",
      changes: D,
      origin: a.uuid,
      duration: { rounds: 5 },
      system: { expiration: 3 }
    };
    getDocumentClass("ActiveEffect").create(Pt, { parent: b });
  }

  l(c, "callback"), foundry.applications.api.DialogV2.wait({
    window: { title: "Apply Smite" },
    position: { width: 400, height: "auto" },
    content: f,
    buttons: [{ action: "apply", label: "Apply Effects", default: !0, callback: c }]
  });
}

l(ds, "applySmiteEffect");

async function us() {
  if (!canvas.tokens.controlled.length) {
    ui.notifications.warn("You must select at least one token.");
    return;
  }
  const a = /* @__PURE__ */ new Set(["bound", "distracted", "entangled", "shaken", "stunned", "vulnerable", "wild-attack"]),
    s = /* @__PURE__ */ new Map(), e = Array.from(a).reduce((o, u) => {
      const f = CONFIG.statusEffects.find((c) => c.id === u);
      return f && (o.push({ value: u, label: game.i18n.localize(f.name) }), s.set(u, f)), o;
    }, []);
  e.sort((o, u) => o.label.localeCompare(u.label));
  const n = [
    "<p>Select the status effects you want to manage.</p>",
    "<fieldset>",
    "<legend>Status Effects</legend>",
    foundry.applications.fields.createMultiSelectInput({
      type: "checkboxes",
      name: "statuses",
      options: e,
      value: []
    }).outerHTML,
    "</fieldset>"
  ].join("");
  foundry.applications.api.DialogV2.wait({
    classes: ["swade-core-rules", "manage-status-effects"],
    window: { title: "Manage Status Effects", icon: "fa-solid fa-magic" },
    position: { width: "auto", height: "auto" },
    content: n,
    render: i,
    buttons: [
      {
        action: "add",
        label: "Add",
        default: !0,
        callback: (o, u) => {
          r(u, !0);
        }
      },
      {
        action: "remove",
        label: "Remove",
        callback: (o, u) => {
          r(u, !1);
        }
      }
    ]
  });

  function i(o, u) {
    const f = u.element;
    for (const c of f.querySelectorAll("[name=statuses] label.checkbox")) {
      const m = c.querySelector("input"), p = document.createElement("IMG");
      p.src = s.get(m.value).img, c.insertAdjacentElement("afterbegin", p);
    }
  }

  l(i, "render");

  async function r(o, u) {
    const f = Array.from(o.form.elements.statuses.value);
    if (!f.length) {
      ui.notifications.warn("No effects selected for processing.");
      return;
    }
    for (const c of canvas.tokens.controlled) {
      const m = c.actor;
      if (m)
        for (const p of f) {
          const g = m.effects.filter((h) => h.statuses instanceof Set && h.statuses.has(p));
          for (const h of g)
            await h.delete();
          u && g.length === 0 && await m.toggleStatusEffect(p, { active: u });
        }
    }
    ui.notifications.info(`${u ? "Added" : "Removed"} selected effects.`);
  }

  l(r, "processStatusEffects");
}

l(us, "manageStatusEffects");

async function ms(a, s = "") {
  if (!a) {
    ui.notifications.warn("No actor selected!");
    return;
  }
  const e = [
    ...Object.entries(CONFIG.SWADE.attributes || {}).map(([o, u]) => ({
      value: `attr-${o}`,
      label: u.long,
      group: "Attributes"
    })),
    ...a.itemTypes.skill.map((o) => ({
      value: `skill-${o.id}`,
      label: o.name,
      group: "Skills"
    }))
  ], t = new foundry.data.fields.StringField({
    label: "Trait",
    required: !0
  }).toFormGroup({}, { options: e, name: "traitId" }).outerHTML, n = new foundry.data.fields.BooleanField({
    label: "Raise?"
  }).toFormGroup({}, { name: "raise" }).outerHTML, i = [
    "<p>Select the trait and choose the modification.</p>",
    "<fieldset>",
    t,
    n,
    "</fieldset>"
  ].join(""), { FormDataExtended: r } = foundry.applications.ux;
  foundry.applications.api.DialogV2.wait({
    window: { title: `Boost/Lower ${a.name} Trait` },
    position: { width: 400, height: "auto" },
    content: i,
    buttons: [
      {
        action: "boost",
        icon: "fa-solid fa-arrow-up",
        label: "Boost Trait",
        default: !0,
        callback: (o, u) => {
          const f = new r(u.form).object;
          lt(a, f, "boost", s);
        }
      },
      {
        action: "lower",
        icon: "fa-solid fa-arrow-down",
        label: "Lower Trait",
        callback: (o, u) => {
          const f = new r(u.form).object;
          lt(a, f, "lower", s);
        }
      }
    ]
  });
}

l(ms, "applyBoostLowerTraitSwadeCore");

async function lt(a, s, e, t) {
  const [n, i] = s.traitId.split("-");
  if (!i || !["attr", "skill"].includes(n) || !["lower", "boost"].includes(e))
    return;
  let r, o;
  switch (n) {
    case "attr":
      o = `system.attributes.${i}.die.sides`, r = `${e.capitalize()} ${CONFIG.SWADE.attributes[i].long}`;
      break;
    case "skill":
      o = `@Skill{${a.items.get(i)?.name || "Unknown Skill"}}[system.die.sides]`, r = `${e.capitalize()} ${a.items.get(i)?.name || "Unknown Skill"}`;
      break;
  }
  const u = {
    name: r,
    description: t,
    changes: [{
      key: o,
      mode: CONST.ACTIVE_EFFECT_MODES.ADD,
      value: (e === "lower" ? s.raise ? -4 : -2 : s.raise ? 4 : 2).signedString()
    }],
    origin: a.uuid,
    duration: { rounds: e === "lower" ? 1 : 5 },
    system: { expiration: e === "lower" ? 3 : CONFIG.SWADE.CONST.STATUS_EFFECT_EXPIRATION.EndOfTurnPrompt }
  };
  await a.createEmbeddedDocuments("ActiveEffect", [u]);
}

l(lt, "handleFormSubmission");

async function ps() {
  const a = foundry.applications.fields.createTextInput({
    name: "damageRoll",
    placeholder: "e.g., 3d6 or 3d6x",
    required: !0
  }), s = foundry.applications.fields.createTextInput({
    name: "flavor",
    placeholder: "e.g., Fire, Falling, Breaking Things, etc."
  }), e = [
    "<fieldset>",
    "<div class=\"form-group\">",
    "<label for=\"damageRoll\">Roll Formula:</label>",
    a.outerHTML,
    // Insert the rendered input
    "</div>",
    "<div class=\"form-group\">",
    "<label for=\"flavor\">Flavor Text:</label>",
    s.outerHTML,
    // Insert the rendered input
    "</div>",
    "</fieldset>"
  ].join("");
  await foundry.applications.api.DialogV2.wait({
    window: { title: "Damage Roll", icon: "fa-solid fa-sword" },
    position: { width: 400, height: "auto" },
    content: e,
    buttons: [
      {
        action: "apply",
        icon: "fa-solid fa-dice",
        label: "Roll Damage",
        default: !0,
        callback: (t, n) => {
          const { FormDataExtended: i } = foundry.applications.ux, r = new i(n.form).object, o = r.damageRoll?.trim(),
            u = r.flavor?.trim();
          if (!o || !Roll.validate(o)) {
            ui.notifications.error("Please enter a valid damage roll formula.");
            return;
          }
          try {
            new CONFIG.Dice.DamageRoll(o).toMessage({ flavor: u || "No flavor specified" });
          } catch (f) {
            console.error("Error performing damage roll:", f), ui.notifications.error("Failed to execute damage roll. Check your input.");
          }
        }
      }
    ]
  });
}

l(ps, "rollDamage");

l(Ve, "getSelectedActors");

function Ve({ defaultAssigned: a = !0 } = {}) {
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

async function fs() {
  const a = Ve();
  if (!a)
    return;
  const s = foundry.applications.fields.createNumberInput({
    name: "wounds",
    required: !0
  }), e = foundry.applications.fields.createFormGroup({
    label: "Number of Wounds to Heal",
    input: s,
    // Pass the woundsInput DOM element
    hint: "Put -1 if a Critical Failure increases Wound level by one"
  });
  foundry.applications.api.DialogV2.prompt({
    window: { title: "Heal Wounds", icon: "fa-solid fa-kit-medical" },
    position: { width: 600, height: "auto" },
    content: `<fieldset>${e.outerHTML}</fieldset>`,
    ok: {
      icon: "fa-solid fa-kit-medical",
      label: "Heal",
      callback: async (t, n) => {
        const i = n.form.elements.wounds.valueAsNumber;
        gs(a, i);
      }
    }
  });
}

l(fs, "healWounds");

async function gs(a, s) {
  for (const e of a) {
    if (!["character", "npc"].includes(e.type)) {
      ui.notifications.warn(`${e.name} is not a Character or NPC type.`);
      continue;
    }
    const t = e.system.wounds.value, n = e.system.wounds.max, i = Math.max(0, t - s);
    if (await e.update({ "system.wounds.value": i }), i === 0 && t > 0)
      ui.notifications.info(`${e.name} was healed of all wounds.`);
    else if (s !== -1) {
      const u = Math.min(s, t);
      ui.notifications.info(`${e.name} healed of ${u} wound${u !== 1 ? "s" : ""}.`);
    }
    const r = game.swade.util.getStatusEffectDataById("incapacitated");
    if (!r) {
      ui.notifications.warn("Incapacitated effect data could not be found.");
      continue;
    }
    const o = i > n;
    await e.toggleStatusEffect(r.id, { active: o }), o && ui.notifications.info(`${e.name} is incapacitated due to exceeding maximum wounds.`);
  }
}

l(gs, "applyHealWound");
const xe = /* @__PURE__ */ l((a, s) => a.label.localeCompare(s.label), "sort"), {
  SetField: hs,
  StringField: ws
} = foundry.data.fields;

async function ys() {
  const a = game.packs.filter((c) => c.metadata.type === "Item" && c.metadata.packageName !== "swade"), s = {
    folders: game.actors.folders.map((c) => ({ value: c.id, label: c.name })).sort(xe),
    actors: game.actors.map((c) => ({ value: c.id, label: c.name })).sort(xe),
    packs: a.map((c) => ({ value: c.metadata.id, label: `${c.metadata.label} (${c.metadata.packageName})` })).sort(xe)
  }, e = Object.entries(s).map(([c, m]) => {
    const g = new hs(new ws()).toFormGroup(
      { classes: ["stacked", "scrollable"] },
      { type: "checkboxes", name: c, options: m }
    );
    return `
    <fieldset style="max-height: 200px">
      <legend>
        <label class="checkbox scrollable">
          <input type="checkbox" data-toggle="">
          ${c.capitalize()}
        </label>
      </legend>
      ${g.outerHTML}
    </fieldset>`;
  }), t = /* @__PURE__ */ l((c, m) => {
    const p = m.element;
    for (const g of p.querySelectorAll("[data-toggle]"))
      g.addEventListener("change", (h) => {
        const b = g.closest("fieldset")?.querySelector("multi-checkbox");
        b && (b.value = g.checked ? s[b.name].map((S) => S.value) : []);
      });
  }, "render"), n = [
    "<p>",
    "Select actors whose items to patch by selecting the actors themselves or the folder that contains them.",
    " Then select the compendiums to use for patching their owned items.",
    "</p>",
    ...e
  ].join(""), i = await foundry.applications.api.DialogV2.prompt({
    classes: ["swade-core-rules", "actor-item-patcher", "scrollable"],
    window: { title: "Actor Item Patcher", icon: "fa-solid fa-wrench" },
    position: { width: 600, height: "auto" },
    content: n,
    render: t,
    ok: {
      label: "Patch Items",
      icon: "fa-solid fa-check",
      callback: (c, m) => new FormDataExtended(m.form).object
    }
  });
  if (!i)
    return;
  const r = vs(i.folders), o = i.actors.map((c) => game.actors.get(c)).filter((c) => c),
    u = i.packs.map((c) => game.packs.get(c)).filter((c) => c), f = /* @__PURE__ */ new Set([...r, ...o]);
  if (!f.size || !u.length) {
    ui.notifications.warn("No actors or compendium packs selected. Aborting.");
    return;
  }
  for (const c of f)
    await bs(c, u);
  ui.notifications.info("Finished patching selected actors!");
}

l(ys, "patchActorsDialog");

async function bs(a, s) {
  const e = [];
  for (const t of a.items) {
    const n = await ks(t, s);
    if (n) {
      const i = foundry.utils.mergeObject(
        n.toObject(),
        {
          _id: t.id,
          // Keep the existing ID for the item
          system: {
            die: {
              sides: t.system.die?.sides ?? n.system.die?.sides,
              // Retain existing die.sides
              modifier: t.system.die?.modifier ?? n.system.die?.modifier
              // Retain existing die.modifier
            }
          }
        },
        { inplace: !1 }
      );
      e.push(i);
    }
  }
  e.length && (await a.updateEmbeddedDocuments("Item", e), console.log(`Patched ${e.length} items for ${a.name}.`));
}

l(bs, "patchActorItems");

async function ks(a, s) {
  const e = /* @__PURE__ */ l((n) => n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, ""), "normalizeString"),
    t = e(a.name);
  for (const n of s) {
    const i = n.index.find((r) => r.type !== a.type ? !1 : t === e(r.name));
    if (i)
      return fromUuid(i.uuid);
  }
  return null;
}

l(ks, "findMatchingCompendiumItem");

function vs(a) {
  const s = /* @__PURE__ */ new Set();
  for (const t of a) {
    const n = game.folders.get(t);
    if (!n)
      continue;
    s.add(n);
    const i = n.getSubfolders(!0);
    for (const r of i)
      s.add(r);
  }
  const e = /* @__PURE__ */ new Set();
  for (const t of s)
    for (const n of t.contents)
      e.add(n);
  return Array.from(e);
}

l(vs, "getSelectedFolders");
const M = getDocumentClass("ChatMessage"), Be = getDocumentClass("ActiveEffect"), {
  NumberField: Es,
  StringField: Cs
} = foundry.data.fields;

async function Ss() {
  const a = M.getSpeaker(), e = (canvas.ready ? canvas.tokens.get(a.token) : null)?.actor ?? game.actors.get(a.actor);
  if (!e) {
    ui.notifications.error("No valid actor found.");
    return;
  }
  const t = new Cs({
    label: "Poison Type",
    hint: "Choose the type of poison to apply.",
    required: !0
  }).toFormGroup(
    {},
    {
      name: "poison",
      options: [
        { value: "lethal", label: "Lethal Poison" },
        { value: "mild", label: "Mild Poison" },
        { value: "paralyzing", label: "Paralyzing Poison" },
        { value: "knockout", label: "Knockout Poison" }
      ]
    }
  ).outerHTML, n = new Es({
    label: "Paralysis Duration (Rounds)",
    hint: "Optional. Specify a duration for paralysis (rounds). Defaults to 1 if left blank.",
    min: 1,
    // Minimum 1 round
    max: 100,
    // Maximum 100 rounds
    integer: !0
  }).toFormGroup(
    {},
    {
      name: "duration",
      value: 1,
      placeholder: "1"
    }
  ).outerHTML, i = `
  <fieldset>
    <legend>Pick Your Poison</legend>
    ${t}
    ${n}
  </fieldset>`, { FormDataExtended: r } = foundry.applications.ux, o = await foundry.applications.api.DialogV2.wait({
    window: { title: "Apply Poison", icon: "fa-solid fa-flask-round-poison" },
    position: { width: 600, height: "auto" },
    content: i,
    buttons: [
      {
        action: "fail",
        label: "Failure",
        icon: "fa-solid fa-skull",
        callback: (u, f) => ({ ...new r(f.form).object, result: "fail" })
      },
      {
        action: "critFail",
        label: "Critical Failure",
        icon: "fa-solid fa-skull-crossbones",
        callback: (u, f) => ({ ...new r(f.form).object, result: "critFail" })
      }
    ]
  });
  o && Is(e, o);
}

l(Ss, "applyPoison");

async function Is(a, { poison: s, duration: e, result: t }) {
  if (!a.status.isDistracted) {
    const n = game.swade.util.getStatusEffectDataById("distracted");
    await a.toggleActiveEffect(n, { active: !0 });
  }
  switch (s) {
    case "lethal":
      return As(a, t);
    case "mild":
      return Ds(a, t);
    case "paralyzing":
      return Ts(a, t, e);
    case "knockout":
      return Ps(a, t, e);
  }
}

l(Is, "handlePoison");

async function As(a, s, e) {
  if (!a.status.isStunned) {
    const o = game.swade.util.getStatusEffectDataById("stunned");
    await a.toggleActiveEffect(o, { active: !0 });
  }
  const t = a.system.wounds, n = s === "fail" ? 1 : 2, i = t.value + n;
  if (await a.update({ "system.wounds.value": i }), i > t.max && !a.status.isIncapacitated) {
    const o = game.swade.util.getStatusEffectDataById("incapacitated");
    await a.toggleActiveEffect(o, { active: !0 });
  }
  const r = (await new Roll("2d6").evaluate({ allowInteractive: !1 })).total;
  M.create({
    content: `${a.name} is Distracted, Stunned, takes ${n} Wound(s), and will perish from the lethal poison in ${r} rounds.`,
    speaker: M.getSpeaker({ actor: a })
  }), Be.create(
    {
      name: "Lethal Poison",
      img: "icons/magic/acid/dissolve-bone-skull.webp",
      duration: { rounds: r },
      flags: { swade: { expiration: 0 } }
    },
    { parent: a }
  );
}

l(As, "handleLethalPoison");

async function Ds(a, s, e) {
  const t = s === "fail" ? 1 : 2, n = a.system.fatigue, i = Math.min(n.max, n.value + t);
  await a.update({ "system.fatigue.value": i });
  const r = t === 1 ? "Fatigue" : "Exhaustion";
  M.create({
    content: `${a.name} is Distracted and suffers ${r} from the mild poison.`,
    speaker: M.getSpeaker({ actor: a })
  });
}

l(Ds, "handleMildPoison");

async function Ts(a, s, e) {
  const t = game.swade.util.getStatusEffectDataById("stunned");
  a.status.isStunned || await a.toggleActiveEffect(t, { active: !0 });
  const n = M.getSpeaker({ actor: a });
  e > 1 ? (M.create({
    content: `${a.name} is Distracted, Stunned, and cannot attempt to recover from being Stunned for ${e} rounds.`,
    speaker: n
  }), Be.create(
    {
      name: "Paralyzing Poison",
      img: "icons/svg/paralysis.svg",
      duration: { rounds: e },
      flags: { swade: { expiration: 0 } }
    },
    { parent: a }
  )) : M.create({
    content: `${a.name} is Distracted, Stunned, and may attempt to recover from paralysis on their next turn.`,
    speaker: n
  });
}

l(Ts, "handleParalyzingPoison");

async function Ps(a, s, e) {
  if (e = (await new Roll(s === "critFail" ? "4d6" : "2d6").evaluate({ allowInteractive: !1 })).total, !a.status.isIncapacitated) {
    const t = game.swade.util.getStatusEffectDataById("incapacitated");
    await a.toggleActiveEffect(t, { active: !0 });
  }
  M.create({
    content: `${a.name} is Distracted, Incapacitated, and Unconscious for ${e} hours.`,
    speaker: M.getSpeaker({ actor: a })
  }), Be.create(
    {
      name: "Knockout Poison",
      img: "icons/svg/sleep.svg",
      duration: { seconds: e * 3600 },
      flags: { swade: { expiration: 0 } }
    },
    { parent: a }
  );
}

l(Ps, "handleKnockoutPoison");

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
      position: { width: 400, height: "auto" },
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
        ui.notifications.warn(game.i18n.format("SWADE_CORE_RULES.Macros.JackOfAllTrades.RollSmartsFailed", { name: i.name }));
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
          system: { die: {}, swid: game.swade.util.slugify(t) }
        }, m = "swade-core-rules", p = "jack-of-all-trades";
      foundry.utils.setProperty(c, `flags.${m}.${p}`, !0);
      const g = getDocumentClass("ChatMessage"), h = g.getSpeaker({ actor: i }),
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
      S && (c.system.die = { sides: S }, await i.createEmbeddedDocuments("Item", [c], { renderSheet: !1 })), g.create({
        content: x,
        speaker: h
      });
    }
}

l(Os, "jackOfAllTrades");

const ct = "swade-core-rules";

async function Ls({ itemName: a = "Warrior's Gift", itemFlag: s = "warriors-gift" } = {}) {
  const e = "icons/svg/sword.svg", t = Ve();
  if (!t)
    return;
  const n = [];
  for (const g of game.packs) {
    if (g.metadata.type !== "Item" || g.metadata.packageName === "swade")
      continue;
    const h = await g.getIndex({ fields: ["system.category"] });
    for (const b of h)
      b.type === "edge" && b.system?.category?.toLowerCase?.() === "combat" && n.push({
        value: b.uuid,
        label: `${b.name} (${g.metadata.packageName})`
      });
  }
  if (n.sort((g, h) => g.label.localeCompare(h.label)), !n.length) {
    ui.notifications.warn("No Combat Edges found in available compendiums.");
    return;
  }
  const i = foundry.applications.fields.createMultiSelectInput({
    type: "checkboxes",
    name: "edges",
    options: n
  }), r = [
    `<p>Select the Combat Edges you want to grant with <strong>${a}</strong>.</p>`,
    "<fieldset>",
    "<legend>Combat Edges</legend>",
    "<div class=\"swade-core-rules scrollable-container\">",
    i.outerHTML,
    "</div>",
    "</fieldset>"
  ].join(""), o = await foundry.applications.api.DialogV2.prompt({
    classes: [],
    window: { title: a, icon: e },
    position: { width: "auto", height: "auto" },
    content: r,
    ok: {
      label: "Grant Edges",
      callback: (g, h) => h.form.elements.edges.value
    }
  });
  if (!o?.length)
    return;
  const f = (await Promise.all(o.map((g) => fromUuid(g)))).map((g) => {
      const h = g.toObject();
      return h.name = `${h.name} (${a})`, h.img = e, foundry.utils.setProperty(h, `flags.${ct}.tempedges.${s}`, !0), h;
    }), c = {
      name: a,
      img: e,
      duration: { rounds: 5 },
      flags: {
        [ct]: {
          tempedges: { [s]: !0 },
          edgeUuids: o
        }
      },
      system: { expiration: 3 }
    }, m = new Intl.ListFormat(game.i18n.lang, { style: "long", type: "conjunction" }),
    p = getDocumentClass("ActiveEffect");
  for (const g of t) {
    const h = await g.createEmbeddedDocuments("Item", f);
    if (!h.length)
      continue;
    const b = m.format(h.map((S) => S.name));
    ui.notifications.info(`${g.name} has been granted the ${b} Edges.`), p.create(c, { parent: g });
  }
}

l(Ls, "warriorsGift");

async function Fs() {
  let a = canvas.tokens.controlled.map((e) => e.actor).filter((e) => e);
  if (!a.length) {
    const e = game.user.character;
    if (!e) {
      ui.notifications.warn(
        "No tokens selected and no character assigned. Please select a token or assign a character."
      );
      return;
    }
    a = [e];
  }
  const s = "wild-attack";
  for (const e of a)
    await e.toggleStatusEffect(s);
}

l(Fs, "wildAttack");

async function Ms(a, s = {}) {
  const e = foundry.applications.fields.createFormGroup({
    label: "Fear Penalty",
    hint: "Input creature Fear Penalty (Positive Number, leave blank for 0)",
    input: foundry.applications.fields.createNumberInput({
      name: "fear",
      placeholder: "0"
    })
  });
  foundry.applications.api.DialogV2.prompt({
    window: { title: "Fear Table Modifier", icon: "fa-solid fa-face-scream" },
    position: { width: 400, height: "auto" },
    content: `<fieldset>${e.outerHTML}</fieldset>`,
    ok: {
      icon: "fa-solid fa-face-scream",
      label: "Roll",
      callback: async (t, n) => {
        Rs(a, n.form.elements.fear.valueAsNumber || 0);
      }
    }
  });
}

l(Ms, "coreFearDialog");

async function Rs(a, s) {
  const e = await fromUuid("Compendium.swade-core-rules.swade-tables.RollTable.jhkI6HatGAeyflta");
  if (!e) {
    ui.notifications.error("Fear Table not found.");
    return;
  }
  const n = (await e.draw({ roll: Roll.create(`1d20 + ${s}`) })).roll.total, i = game.combat?.getCombatantByActor(a);
  switch (!0) {
    case n < 4:
      i && i.setJoker(!0);
      break;
    case n < 7:
      a.status.isDistracted || _("distracted", a);
      break;
    case n < 10:
      a.status.isVulnerable || _("vulnerable", a);
      break;
    case n < 13:
      a.status.isShaken || _("shaken", a);
      break;
    case n === 13:
      a.status.isStunned || _("stunned", a);
      break;
    case n < 16:
      a.statuses.has("frightened") || _("frightened", a);
      break;
    case n < 18:
      a.status.isShaken || await _("shaken", a), a.rollRunningDie();
      break;
    case n < 22: {
      const o = (await fromUuid("Compendium.swade-core-rules.swade-hindrances.Item.qg2JfyMripHqS1O0")).toObject();
      n > 19 && (o.system.major = !0), await a.createEmbeddedDocuments("Item", [o]);
      break;
    }
    default:
      a.statuses.has("heart-attack") || Us(a);
  }
}

l(Rs, "rollFear");

async function _(a, s) {
  const e = CONFIG.SWADE.statusEffects.find((t) => t.id === a);
  e && await s.toggleActiveEffect(e, { active: !0 });
}

l(_, "applyStatus");

async function Us(a) {
  if ((await a.rollAttribute("vigor", {
    additionalMods: [{ label: "Heart Attack", value: -2 }]
  })).total < 4) {
    a.status.isIncapacitated || _("incapacitated", a);
    const e = CONFIG.SWADE.statusEffects.find((n) => n.id === "heart-attack"), t = new Roll("2d6").roll();
    await t.toMessage(), e.duration = { rounds: t.total }, await a.toggleActiveEffect(e, { active: !0 });
  } else
    a.status.isStunned || _("stunned", a);
}

l(Us, "heartAttack");

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
    window: { title, icon: "fa-solid fa-bolt" },
    content: `<div class="form-group"><label>${fieldLabel}</label><select name="w" style="width:100%">${optsHtml}</select></div>`,
    ok: { label: okLabel, callback: (_ev, dlg) => dlg.form.elements.w.value }
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
  return mul === 1 ? itm.rollDamage() : itm.rollDamage({ dmgOverride: `(${base}) * ${mul}` });
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
const MY_TURN_TPL = "modules/swade-core-rules/templates/sidebar/turn.hbs";
const MY_TRACKER_TPL = "modules/swade-core-rules/templates/sidebar/tracker.hbs";

async function registerTurnPartial() {
  const resp = await fetch(MY_TURN_TPL);
  const src = await resp.text(); // у файлі вже {{{cardString}}}
  Handlebars.unregisterPartial(TURN_PARTIAL);
  Handlebars.registerPartial(TURN_PARTIAL, Handlebars.compile(src));
}

Hooks.once("init", async () => {
  game.swadeCore ??= {}, game.swadeCore.macros ??= {}, game.swadeCore.macros.applySmiteEffect = ds, game.swadeCore.macros.manageStatusEffects = us, game.swadeCore.macros.applyBoostLowerTraitSwadeCore = ms, game.swadeCore.macros.rollDamage = ps, game.swadeCore.macros.healWounds = fs, game.swadeCore.macros.patchActorsDialog = ys, game.swadeCore.macros.applyPoison = Ss, game.swadeCore.macros.jackOfAllTrades = Os, game.swadeCore.macros.warriorsGift = Ls, game.swadeCore.macros.wildAttack = Fs, game.swadeCore.macros.coreFearDialog = Ms;
  game.swadeCoreUa.macros.mightyBlow = Mb;

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
console.log(`[${y}@${Mt}...] successfully loaded!`);