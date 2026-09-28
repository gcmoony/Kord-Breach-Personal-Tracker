(function () {
  const STORAGE_KEY = "kord-breach-state-v2";

  function lsGet(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      throw e;
    }
  }

  function lsSet(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const DEFAULT_STATE = {
    docTypes: [
      {
        id: "financial",
        name: "Financial documents",
        locations: "Customs / Streets of Tarkov / Interchange",
      },
      {
        id: "personnel",
        name: "PMC personnel files",
        locations: "Reserve / Lighthouse / Icebreaker",
      },
      {
        id: "project",
        name: "Project documentation",
        locations: "Factory / Reserve / Customs",
      },
      {
        id: "blueprints",
        name: "Blueprints and technical documentation",
        locations: "Interchange / Factory / Labyrinth",
      },
      {
        id: "technical",
        name: "Technical Documentation",
        locations: "Shoreline / Woods / Lighthouse",
      },
      {
        id: "test",
        name: "Test documentation",
        locations: "Shoreline / Woods / Icebreaker",
      },
      {
        id: "user",
        name: "User documentation",
        locations: "GZ / Streets of Tarkov / Labs",
      },
      {
        id: "medical",
        name: "Medical documents",
        locations: "Labs / GZ / Labyrinth",
      },
      {
        id: "classified",
        name: "Classified (universal)",
        locations: "Expansion Hub (TarCoins)",
      },
    ],
    inventory: {
      financial: 0,
      personnel: 0,
      project: 0,
      blueprints: 0,
      technical: 0,
      test: 0,
      user: 0,
      medical: 0,
      classified: 0,
    },
    rewards: [
      {
        id: "default-p1-1",
        name: "Marked Dogtag",
        page: 1,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p1-2",
        name: "50 TarCoins",
        page: 1,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p1-3",
        name: "Burn Poster",
        page: 1,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p1-4",
        name: "Black Division Gear Crate",
        page: 1,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p1-5",
        name: "Black Wood Ceiling",
        page: 1,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p2-1",
        name: "Gentex Ops-Core SOTR Respirator (barter)",
        page: 2,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p2-2",
        name: "Black Division Gear Crate",
        page: 2,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p2-3",
        name: "Red Hawaii Tactical Clothing",
        page: 2,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p2-4",
        name: "Scorpion Target",
        page: 2,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p2-5",
        name: "50 TarCoins",
        page: 2,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p3-1",
        name: "Mystery Ranch NICE Frame Load Sling (barter)",
        page: 3,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p3-2",
        name: "Black Division Gear Crate",
        page: 3,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p3-3",
        name: "Black Herringbone",
        page: 3,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p3-4",
        name: "50 TarCoins",
        page: 3,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p3-5",
        name: "Heart Mannequin Pose",
        page: 3,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p4-1",
        name: "Marked Dogtag 2",
        page: 4,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p4-2",
        name: "Microtech Jagdkommando Knife",
        page: 4,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p4-3",
        name: "50 TarCoins",
        page: 4,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p4-4",
        name: "Beware the Bear Poster",
        page: 4,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p4-5",
        name: "Black Division Gear Crate",
        page: 4,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p5-1",
        name: "Orange Hawaii Tactical Clothing",
        page: 5,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p5-2",
        name: "50 TarCoins",
        page: 5,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p5-3",
        name: "Black Division Target",
        page: 5,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p5-4",
        name: "Black Division Gear Crate",
        page: 5,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p5-5",
        name: "Ferro Concepts FCPC V5 Plate Carrier Black Division (barter)",
        page: 5,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p6-1",
        name: "Knyazev Character Appearance",
        page: 6,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p6-2",
        name: "O'Connor Character Appearance",
        page: 6,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p6-3",
        name: "Howa Type 20 5.56×45 Assault Rifle (barter)",
        page: 6,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p7-1",
        name: "Marked Dogtag 3",
        page: 7,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p7-2",
        name: "50 TarCoins",
        page: 7,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p7-3",
        name: "Scorpion Upper Tactical Clothing",
        page: 7,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p7-4",
        name: "Scorpion Lower Tactical Clothing",
        page: 7,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p8-1",
        name: "Black Division Gear Crate",
        page: 8,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p8-2",
        name: "50 TarCoins",
        page: 8,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p8-3",
        name: "White Accent Walls",
        page: 8,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p8-4",
        name: "Arch Mannequin Pose",
        page: 8,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p8-5",
        name: "Dome Mannequin Pose",
        page: 8,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p9-1",
        name: "Spiritus Systems LV-119 Plate Carrier Black Division V2 (barter)",
        page: 9,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p9-2",
        name: "50 TarCoins",
        page: 9,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p9-3",
        name: "Tasmanian Tiger Modular Pack 45 Plus Multicam Black (barter)",
        page: 9,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p9-4",
        name: "Black Division Gear Crate",
        page: 9,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p9-5",
        name: "Server Room",
        page: 9,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p10-1",
        name: "Anton Character Voice",
        page: 10,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p10-2",
        name: "Garrett Character Voice",
        page: 10,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p10-3",
        name: "100 TarCoins",
        page: 10,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p10-4",
        name: "Black Division Gear Crate",
        page: 10,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p11-1",
        name: "Marked Dogtag 4",
        page: 11,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p11-2",
        name: "150 TarCoins",
        page: 11,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p11-3",
        name: "Knyazev (After Battle) Character Appearance",
        page: 11,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p11-4",
        name: "O'Connor (After Battle) Character Appearance",
        page: 11,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p12-1",
        name: "Norinco QBZ-191 5.8×42 Assault Rifle (barter)",
        page: 12,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p12-2",
        name: "Nocturnal Upper Tactical Clothing",
        page: 12,
        reqs: [],
        unlocked: false,
      },
      {
        id: "default-p12-3",
        name: "Nocturnal Lower Tactical Clothing",
        page: 12,
        reqs: [],
        unlocked: false,
      },
    ],
    preferences: {
      showNotTracking: false,
    },
  };

  let state = null;
  let nextFormReqCount = 1;
  let rewardFilter = "all";
  let showNotTracking = false;

  function uid(prefix) {
    return prefix + "_" + Math.random().toString(36).slice(2, 9);
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  let storageOk = true;

  function loadState() {
    try {
      const result = lsGet(STORAGE_KEY);
      if (result) {
        if (Array.isArray(result.docTypes)) {
          result.docTypes.forEach(function (dt) {
            delete dt.total;
          });
          // migrate: add Technical Documentation if missing (distinct from Blueprints and technical documentation)
          if (
            !result.docTypes.some(function (dt) {
              return dt.id === "technical";
            })
          ) {
            var idx = result.docTypes.findIndex(function (dt) {
              return dt.id === "classified";
            });
            var tech = {
              id: "technical",
              name: "Technical Documentation",
              locations: "Labs / Reserve / Ground Zero",
            };
            if (idx >= 0) result.docTypes.splice(idx, 0, tech);
            else result.docTypes.push(tech);
          }
        }
        // migrate: ensure inventory has all keys (e.g., technical for old saves)
        if (result.inventory && typeof result.inventory === "object") {
          Object.keys(DEFAULT_STATE.inventory).forEach(function (k) {
            if (!(k in result.inventory)) result.inventory[k] = 0;
          });
        }
        if (!result.preferences) {
          result.preferences = clone(DEFAULT_STATE.preferences);
        }
        // sync toggle state from persisted preferences
        showNotTracking = !!result.preferences.showNotTracking;
        return result;
      }
    } catch (e) {
      storageOk = false;
      console.error("Failed to load ledger state from localStorage", e);
    }
    const def = clone(DEFAULT_STATE);
    showNotTracking = !!def.preferences.showNotTracking;
    return def;
  }

  function saveState() {
    try {
      lsSet(STORAGE_KEY, state);
      storageOk = true;
    } catch (e) {
      storageOk = false;
      console.error("Failed to save ledger state to localStorage", e);
    }
    updateStorageWarning();
  }

  function updateStorageWarning() {
    const el = document.getElementById("kb-storage-warning");
    if (!el) return;
    el.style.display = storageOk ? "none" : "block";
  }

  function exportData() {
    let data;
    try {
      const stored = lsGet(STORAGE_KEY);
      data = stored || state;
    } catch (e) {
      console.error(
        "Failed to read export data from localStorage, falling back to in-memory state",
        e,
      );
      data = state;
    }
    if (!data) {
      alert("No data to export.");
      return;
    }
    try {
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const date = new Date().toISOString().slice(0, 10);
      a.download = "kord-breach-export-" + date + ".json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Failed to export data", e);
      alert("Export failed: " + e.message);
    }
  }

  function isValidImportData(data) {
    return (
      data &&
      typeof data === "object" &&
      Array.isArray(data.docTypes) &&
      typeof data.inventory === "object" &&
      data.inventory !== null &&
      Array.isArray(data.rewards)
    );
  }

  async function handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const input = event.target;
    let text;
    try {
      text = await file.text();
    } catch (e) {
      alert("Failed to read file: " + e.message);
      input.value = "";
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      alert("Invalid JSON file.");
      input.value = "";
      return;
    }
    if (!isValidImportData(parsed)) {
      alert(
        "Invalid import file: expected { docTypes: [], inventory: {}, rewards: [] }",
      );
      input.value = "";
      return;
    }
    if (Array.isArray(parsed.docTypes)) {
      parsed.docTypes.forEach(function (dt) {
        delete dt.total;
      });
    }
    const confirmed = confirm(
      "Importing will overwrite your current ledger data. Do you want to continue?",
    );
    if (!confirmed) {
      input.value = "";
      return;
    }
    state = clone(parsed);
    if (!state.preferences)
      state.preferences = clone(DEFAULT_STATE.preferences);
    showNotTracking = !!state.preferences.showNotTracking;
    const showEl = document.getElementById("kb-show-not-tracking");
    if (showEl) showEl.checked = showNotTracking;
    try {
      saveState();
      render();
      alert("Data imported successfully.");
    } catch (e) {
      console.error("Failed to save imported data", e);
      alert("Import failed to save: " + e.message);
    } finally {
      input.value = "";
    }
  }

  function docName(id) {
    const d = state.docTypes.find(function (t) {
      return t.id === id;
    });
    return d ? d.name : "(removed type)";
  }

  function canClaim(reward) {
    return reward.reqs.every(function (r) {
      return (state.inventory[r.docId] || 0) >= r.qty;
    });
  }

  function render() {
    renderRequiredDocuments();
    renderInventory();
    renderRewards();
    renderOverall();
  }

  function renderRequiredDocuments() {
    const grid = document.getElementById("kb-required-grid");
    if (!grid) return;
    grid.innerHTML = "";
    const required = {};
    state.docTypes.forEach(function (dt) {
      required[dt.id] = 0;
    });
    state.rewards.forEach(function (r) {
      if (r.unlocked || r.notTracking) return;
      (r.reqs || []).forEach(function (req) {
        if (!req.docId) return;
        required[req.docId] =
          (required[req.docId] || 0) + (parseInt(req.qty, 10) || 0);
      });
    });
    const hasAny = Object.values(required).some(function (v) {
      return v > 0;
    });
    if (!hasAny) {
      const empty = document.createElement("div");
      empty.className = "kb-empty";
      empty.style.gridColumn = "1 / -1";
      empty.textContent =
        "No documents required — all tracking rewards unlocked or no requirements set.";
      grid.appendChild(empty);
      return;
    }
    state.docTypes.forEach(function (dt) {
      const need = required[dt.id] || 0;
      if (need === 0) return;
      const have = state.inventory[dt.id] || 0;
      const remaining = Math.max(0, need - have);
      const pct = need > 0 ? Math.min(100, Math.round((have / need) * 100)) : 0;
      const tile = document.createElement("div");
      tile.className = "kb-doc-tile";
      tile.innerHTML =
        '<div class="inventory-card-header"><div class="kb-doc-name">' +
        escapeHtml(dt.name) +
        "</div>" +
        (dt.locations
          ? '<div class="kb-doc-locations">' +
            escapeHtml(dt.locations) +
            "</div>"
          : "") +
        '</div><div class="kb-doc-count-row"><div class="kb-doc-count">' +
        have +
        '<span class="kb-doc-total"> / ' +
        need +
        "</span></div></div>" +
        '<div class="kb-doc-mini-bar"><div class="kb-doc-mini-bar-inner" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="kb-doc-remaining">' +
        (remaining === 0 ? "Requirement met" : remaining + " more needed") +
        "</div>";
      grid.appendChild(tile);
    });
  }

  function renderOverall() {
    const visibleRewards = showNotTracking
      ? state.rewards
      : state.rewards.filter(function (r) {
          return !r.notTracking;
        });
    const total = visibleRewards.length;
    const unlocked = visibleRewards.filter(function (r) {
      return r.unlocked;
    }).length;
    const pct = total === 0 ? 0 : Math.round((unlocked / total) * 100);
    document.getElementById("kb-overall-pct").textContent = pct + "%";
    document.getElementById("kb-progress-bar").style.width = pct + "%";
    document.getElementById("kb-progress-text").textContent =
      unlocked + " / " + total + " rewards unlocked";
    const docTotal = Object.values(state.inventory).reduce(function (a, b) {
      return a + (b || 0);
    }, 0);
    document.getElementById("kb-doc-total-text").textContent =
      docTotal + " documents in inventory";
  }

  function renderInventory() {
    const grid = document.getElementById("kb-inv-grid");
    grid.innerHTML = "";
    state.docTypes.forEach(function (dt) {
      const tile = document.createElement("div");
      tile.className = "kb-doc-tile";
      const count = state.inventory[dt.id] || 0;
      tile.innerHTML =
        '<div class="inventory-card-header"><div class="kb-doc-name">' +
        escapeHtml(dt.name) +
        "</div>" +
        (dt.locations
          ? '<div class="kb-doc-locations">' +
            escapeHtml(dt.locations) +
            "</div>"
          : "") +
        '</div><div class="kb-doc-count-row">' +
        '<div class="kb-doc-count">' +
        count +
        "</div>" +
        '<div class="kb-stepper">' +
        '<button class="kb-btn-step" data-step="-1" data-doc="' +
        dt.id +
        '">−</button>' +
        '<button class="kb-btn-step" data-step="1" data-doc="' +
        dt.id +
        '">+</button>' +
        "</div>" +
        "</div>";
      grid.appendChild(tile);
    });

    grid.querySelectorAll("[data-step]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-doc");
        const delta = parseInt(btn.getAttribute("data-step"), 10);
        const current = state.inventory[id] || 0;
        state.inventory[id] = Math.max(0, current + delta);
        saveState();
        render();
      });
    });
  }

  function renderRewards() {
    const list = document.getElementById("kb-rewards-list");
    list.innerHTML = "";
    if (state.rewards.length === 0) {
      const empty = document.createElement("div");
      empty.className = "kb-empty";
      empty.textContent =
        "No rewards added yet. Add a reward and set which documents (and how many) it costs.";
      list.appendChild(empty);
      return;
    }

    const sorted = clone(state.rewards).sort(function (a, b) {
      return (a.page || 0) - (b.page || 0);
    });

    let visible = showNotTracking
      ? sorted
      : sorted.filter(function (r) {
          return !r.notTracking;
        });
    let filtered = visible;
    if (rewardFilter === "locked") {
      filtered = visible.filter(function (r) {
        return !r.unlocked;
      });
    } else if (rewardFilter === "unlocked") {
      filtered = visible.filter(function (r) {
        return r.unlocked;
      });
    }

    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.className = "kb-empty";
      if (rewardFilter === "locked") {
        empty.textContent = "No locked rewards.";
      } else if (rewardFilter === "unlocked") {
        empty.textContent = "No unlocked rewards.";
      } else {
        empty.textContent =
          "No rewards added yet. Add a reward and set which documents (and how many) it costs.";
      }
      list.appendChild(empty);
      return;
    }

    filtered.forEach(function (reward) {
      const card = document.createElement("div");
      card.className =
        "kb-reward" +
        (reward.unlocked ? " unlocked" : "") +
        (reward.notTracking ? " not-tracking" : "");

      const reqChips = reward.reqs
        .map(function (r) {
          const have = state.inventory[r.docId] || 0;
          const ok = have >= r.qty;
          return (
            '<span class="kb-req-chip ' +
            (ok ? "ok" : "short") +
            '">' +
            escapeHtml(docName(r.docId)) +
            ' <span class="kb-req-qty">' +
            have +
            "/" +
            r.qty +
            "</span></span>"
          );
        })
        .join("");

      card.innerHTML =
        (reward.unlocked
          ? '<div class="kb-unlocked-stamp">UNLOCKED</div>'
          : "") +
        (reward.notTracking
          ? '<div class="kb-not-tracking-stamp">NOT TRACKING</div>'
          : "") +
        '<div class="kb-reward-top">' +
        "<div>" +
        '<div class="kb-reward-name">' +
        escapeHtml(reward.name) +
        "</div>" +
        (reward.page
          ? '<div class="kb-reward-page">PAGE ' + reward.page + "</div>"
          : "") +
        "</div>" +
        '<button class="kb-reward-remove' +
        (reward.notTracking ? " is-adding" : "") +
        '" data-remove-reward="' +
        reward.id +
        '" title="' +
        (reward.notTracking ? "Track again" : "Stop tracking") +
        '">' +
        (reward.notTracking ? "+" : "✕") +
        "</button>" +
        "</div>" +
        '<div class="kb-req-list">' +
        (reqChips ||
          '<span class="kb-req-chip short">no requirements set</span>') +
        "</div>" +
        '<div class="kb-reward-actions">' +
        '<button class="kb-btn" data-claim="' +
        reward.id +
        '" ' +
        (reward.unlocked || !canClaim(reward) ? "disabled" : "") +
        ">" +
        (reward.unlocked ? "Claimed" : "Claim (uses documents)") +
        "</button>" +
        '<button class="kb-btn" data-mark="' +
        reward.id +
        '" style="border-color:var(--muted);color:var(--muted);">' +
        (reward.unlocked ? "Lock" : "Mark unlocked (no inventory)") +
        "</button>" +
        '<button class="kb-btn" data-edit="' +
        reward.id +
        '" style="border-color:var(--border);color:var(--muted);">Edit</button>' +
        "</div>";

      list.appendChild(card);
    });

    list.querySelectorAll("[data-claim]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-claim");
        const reward = state.rewards.find(function (r) {
          return r.id === id;
        });
        if (!reward || reward.unlocked || !canClaim(reward)) return;
        reward.reqs.forEach(function (r) {
          state.inventory[r.docId] = (state.inventory[r.docId] || 0) - r.qty;
        });
        reward.unlocked = true;
        reward.consumedInventory = true;
        saveState();
        render();
      });
    });
    list.querySelectorAll("[data-mark]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-mark");
        const reward = state.rewards.find(function (r) {
          return r.id === id;
        });
        if (!reward) return;
        if (reward.unlocked) {
          if (reward.consumedInventory) {
            reward.reqs.forEach(function (r) {
              state.inventory[r.docId] =
                (state.inventory[r.docId] || 0) + r.qty;
            });
            reward.consumedInventory = false;
          }
          reward.unlocked = false;
        } else {
          reward.unlocked = true;
          reward.consumedInventory = false;
        }
        saveState();
        render();
      });
    });
    list.querySelectorAll("[data-remove-reward]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-remove-reward");
        const reward = state.rewards.find(function (r) {
          return r.id === id;
        });
        if (!reward) return;
        reward.notTracking = !reward.notTracking;
        saveState();
        render();
      });
    });
    list.querySelectorAll("[data-edit]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-edit");
        showEditRewardForm(id);
      });
    });
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function openRewardForm(editId) {
    const slot = document.getElementById("kb-reward-form-slot");
    if (slot.querySelector(".kb-form")) {
      slot.innerHTML = "";
    }
    const isEdit = !!editId;
    const existing = isEdit
      ? state.rewards.find(function (r) {
          return r.id === editId;
        })
      : null;
    if (isEdit && !existing) return;

    let reqRows = isEdit
      ? existing.reqs.length
        ? clone(existing.reqs)
        : [{ docId: state.docTypes[0] ? state.docTypes[0].id : "", qty: 1 }]
      : [{ docId: state.docTypes[0] ? state.docTypes[0].id : "", qty: 1 }];
    let formName = isEdit ? existing.name : "";
    let formPage = isEdit && existing.page ? String(existing.page) : "";

    function renderForm() {
      slot.innerHTML = "";
      const form = document.createElement("div");
      form.className = "kb-form";

      const optionsHtml = state.docTypes
        .map(function (dt) {
          return (
            '<option value="' + dt.id + '">' + escapeHtml(dt.name) + "</option>"
          );
        })
        .join("");

      let reqRowsHtml = reqRows
        .map(function (row, idx) {
          return (
            '<div class="kb-req-row">' +
            '<div><label>Document</label><select data-req-doc="' +
            idx +
            '">' +
            optionsHtml +
            "</select></div>" +
            '<div><label>Qty</label><input type="number" min="1" value="' +
            row.qty +
            '" data-req-qty="' +
            idx +
            '" style="width:70px;"/></div>' +
            '<button class="kb-req-remove" data-req-remove="' +
            idx +
            '" title="Remove requirement">✕</button>' +
            "</div>"
          );
        })
        .join("");

      form.innerHTML =
        '<div class="kb-form-row">' +
        '<div><label>Reward name</label><input type="text" id="kb-rf-name" placeholder="e.g. Radian Model 1" style="width:220px;" value="' +
        escapeHtml(formName) +
        '"/></div>' +
        '<div><label>Page (optional)</label><input type="number" min="1" id="kb-rf-page" style="width:80px;" value="' +
        escapeHtml(String(formPage)) +
        '"/></div>' +
        "</div>" +
        '<label style="margin-bottom:6px;">Requirements</label>' +
        '<hr class="kb-form-hr">' +
        reqRowsHtml +
        '<div class="kb-form-actions">' +
        '<button class="kb-btn" id="kb-rf-add-req" type="button">+ requirement</button>' +
        "</div>" +
        '<div class="kb-form-actions">' +
        '<button class="kb-btn" id="kb-rf-save" type="button">' +
        (isEdit ? "Update reward" : "Save reward") +
        "</button>" +
        '<button class="kb-btn" id="kb-rf-cancel" type="button" style="border-color:var(--border);color:var(--muted);">Cancel</button>' +
        "</div>";

      slot.appendChild(form);

      document
        .getElementById("kb-rf-name")
        .addEventListener("input", function (e) {
          formName = e.target.value;
        });
      document
        .getElementById("kb-rf-page")
        .addEventListener("input", function (e) {
          formPage = e.target.value;
        });

      form.querySelectorAll("[data-req-doc]").forEach(function (sel) {
        sel.value =
          reqRows[parseInt(sel.getAttribute("data-req-doc"), 10)].docId;
        sel.addEventListener("change", function () {
          reqRows[parseInt(sel.getAttribute("data-req-doc"), 10)].docId =
            sel.value;
        });
      });
      form.querySelectorAll("[data-req-qty]").forEach(function (inp) {
        inp.addEventListener("input", function () {
          reqRows[parseInt(inp.getAttribute("data-req-qty"), 10)].qty =
            Math.max(1, parseInt(inp.value, 10) || 1);
        });
      });
      form.querySelectorAll("[data-req-remove]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const idx = parseInt(btn.getAttribute("data-req-remove"), 10);
          reqRows.splice(idx, 1);
          renderForm();
        });
      });
      document
        .getElementById("kb-rf-add-req")
        .addEventListener("click", function () {
          reqRows.push({
            docId: state.docTypes[0] ? state.docTypes[0].id : "",
            qty: 1,
          });
          renderForm();
        });
      document
        .getElementById("kb-rf-cancel")
        .addEventListener("click", function () {
          slot.innerHTML = "";
          slot.classList.remove("is-open");
        });
      document
        .getElementById("kb-rf-save")
        .addEventListener("click", function () {
          const name = document.getElementById("kb-rf-name").value.trim();
          if (!name) {
            alert("Give the reward a name.");
            return;
          }
          const page =
            parseInt(document.getElementById("kb-rf-page").value, 10) || null;
          const cleanReqs = reqRows.filter(function (r) {
            return r.docId;
          });
          if (isEdit) {
            existing.name = name;
            existing.page = page;
            existing.reqs = cleanReqs;
          } else {
            state.rewards.push({
              id: uid("reward"),
              name: name,
              page: page,
              reqs: cleanReqs,
              unlocked: false,
            });
          }
          saveState();
          slot.innerHTML = "";
          slot.classList.remove("is-open");
          render();
        });
    }

    renderForm();
    slot.classList.add("is-open");
    slot.onclick = function (e) {
      if (e.target === slot) {
        slot.innerHTML = "";
        slot.classList.remove("is-open");
      }
    };
    function escHandler(e) {
      if (e.key === "Escape" && slot.classList.contains("is-open")) {
        slot.innerHTML = "";
        slot.classList.remove("is-open");
        document.removeEventListener("keydown", escHandler);
      }
    }
    document.addEventListener("keydown", escHandler);
  }

  function showRewardForm() {
    openRewardForm(null);
  }

  function showEditRewardForm(rewardId) {
    openRewardForm(rewardId);
  }

  function init() {
    state = loadState();
    updateStorageWarning();
    document.getElementById("kb-loading").style.display = "none";
    document.getElementById("kb-app").style.display = "block";
    render();

    const filterEl = document.getElementById("kb-reward-filter");
    if (filterEl) {
      filterEl.addEventListener("change", function (e) {
        rewardFilter = e.target.value;
        renderRewards();
      });
    }
    const showNotTrackingEl = document.getElementById("kb-show-not-tracking");
    if (showNotTrackingEl) {
      showNotTrackingEl.checked = showNotTracking;
      showNotTrackingEl.addEventListener("change", function (e) {
        showNotTracking = e.target.checked;
        if (!state.preferences)
          state.preferences = clone(DEFAULT_STATE.preferences);
        state.preferences.showNotTracking = showNotTracking;
        saveState();
        renderRewards();
        renderOverall();
      });
    }

    document
      .getElementById("kb-show-reward-form")
      .addEventListener("click", showRewardForm);
    document.getElementById("kb-export").addEventListener("click", exportData);
    document.getElementById("kb-import").addEventListener("click", function () {
      document.getElementById("kb-import-input").click();
    });
    document
      .getElementById("kb-import-input")
      .addEventListener("change", handleImportFile);
    document
      .getElementById("kb-reset-all")
      .addEventListener("click", function () {
        if (!confirm("Reset all inventory and rewards? This cannot be undone."))
          return;
        state = clone(DEFAULT_STATE);
        showNotTracking = !!state.preferences.showNotTracking;
        const showEl2 = document.getElementById("kb-show-not-tracking");
        if (showEl2) showEl2.checked = showNotTracking;
        saveState();
        render();
      });
  }

  init();
})();
