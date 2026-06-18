const STORAGE_KEY = "cleanit_pedidos_materiales_v4_kit_bolsas";
const WHATSAPP_KEY = "cleanit_pedidos_whatsapp_destino";

const catalog = [
  {
    id: "detergente-bio-ultra",
    category: "Químicos",
    name: "Detergente ultraconcentrado",
    detail: "Bio Ultra - Thames · bidón x 5 Lts",
    unit: "bidón x 5 Lts",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "perfume-flower",
    category: "Químicos",
    name: "Perfume o aromatizante de piso",
    detail: "Flower - Thames · bidón x 5 Lts",
    unit: "bidón x 5 Lts",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "lavandina-bio-lav",
    category: "Químicos",
    name: "Lavandina líquida desinfectante",
    detail: "Bio Lav - Thames · bidón x 5 Lts",
    unit: "bidón x 5 Lts",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "rapid-plus-gel",
    category: "Químicos",
    name: "Lavandina en gel desinfectante",
    detail: "Rapid Plus en gel - Thames · 500 ml",
    unit: "envase x 500 ml",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "wood-thames",
    category: "Químicos",
    name: "Wood",
    detail: "Thames · 360 cm3",
    unit: "envase x 360 cm3",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "steel-shine",
    category: "Químicos",
    name: "Steel Shine",
    detail: "Thames · 390 cm3",
    unit: "aerosol x 390 cm3",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "cream-thames",
    category: "Químicos",
    name: "Cream",
    detail: "Thames · 500 ml",
    unit: "envase x 500 ml",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "sarro-attack",
    category: "Químicos",
    name: "Sarro Attack",
    detail: "Thames · 500 ml",
    unit: "envase x 500 ml",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "smell-thames",
    category: "Químicos",
    name: "Smell o aromatizante ambiental",
    detail: "Thames · 262 ml",
    unit: "envase x 262 ml",
    suggestedQty: 3,
    availability: "always",
  },
  {
    id: "alcohol-al70",
    category: "Químicos",
    name: "Alcohol AL70",
    detail: "Thames · bidón x 5 Lts · sugerido para gimnasio",
    unit: "bidón x 5 Lts",
    suggestedQty: 1,
    availability: "gym",
  },
  {
    id: "bolsas-negras-45-60",
    category: "Bolsas",
    name: "Bolsas de residuos negras 45x60",
    detail: "Color negro · paquete",
    unit: "paquete",
    suggestedQty: 1,
    availability: "always",
    includeInSuggestedKit: true,
  },
  {
    id: "bolsas-verdes-45-60",
    category: "Bolsas",
    name: "Bolsas de residuos verdes 45x60",
    detail: "Color verde · paquete",
    unit: "paquete",
    suggestedQty: 1,
    availability: "always",
    includeInSuggestedKit: true,
  },
  {
    id: "bolsas-negras-70-50",
    category: "Bolsas",
    name: "Bolsas de residuos negras 70x50",
    detail: "Color negro · paquete",
    unit: "paquete",
    suggestedQty: 1,
    availability: "always",
    includeInSuggestedKit: false,
  },
  {
    id: "bolsas-verdes-70-50",
    category: "Bolsas",
    name: "Bolsas de residuos verdes 70x50",
    detail: "Color verde · paquete",
    unit: "paquete",
    suggestedQty: 1,
    availability: "always",
    includeInSuggestedKit: false,
  },
  {
    id: "bolsas-negras-90-110",
    category: "Bolsas",
    name: "Bolsas de residuos negras 90x110",
    detail: "Color negro · paquete",
    unit: "paquete",
    suggestedQty: 1,
    availability: "always",
    includeInSuggestedKit: true,
  },
  {
    id: "bolsas-verdes-90-110",
    category: "Bolsas",
    name: "Bolsas de residuos verdes 90x110",
    detail: "Color verde · paquete",
    unit: "paquete",
    suggestedQty: 1,
    availability: "always",
    includeInSuggestedKit: true,
  },
  {
    id: "guantes-mapa-8",
    category: "Elementos",
    name: "Guantes Mapa Talle 8",
    detail: "Par de guantes",
    unit: "par",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "balde-reforzado",
    category: "Elementos",
    name: "Balde reforzado",
    detail: "10 Lts",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "pulverizador-gatillo",
    category: "Elementos",
    name: "Pulverizador de 1 Lt + Gatillo",
    detail: "Botella pulverizadora completa",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "medidor",
    category: "Elementos",
    name: "Medidor",
    detail: "Para dosificación de productos",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "embudo-mediano",
    category: "Elementos",
    name: "Embudo mediano",
    detail: "Para trasvase controlado",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "escoba-cabo",
    category: "Utensilios",
    name: "Escoba + Cabo metálico",
    detail: "Kit completo",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "escobillon-cochera",
    category: "Utensilios",
    name: "Escobillón largo base madera con rosca plástica + Cabo metálico",
    detail: "Para servicios con cochera",
    unit: "unidad",
    suggestedQty: 1,
    availability: "garage",
  },
  {
    id: "pala-cabo",
    category: "Utensilios",
    name: "Pala + Cabo metálico",
    detail: "Kit completo",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "secador-cabo",
    category: "Utensilios",
    name: "Secador + Cabo metálico",
    detail: "Kit completo",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "trapo-piso",
    category: "Paños y fibras",
    name: "Trapo de piso",
    detail: "Uso operativo general",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "rejilla",
    category: "Paños y fibras",
    name: "Rejilla",
    detail: "Uso operativo general",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "microfibra",
    category: "Paños y fibras",
    name: "Microfibra",
    detail: "Uso operativo general",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "fibra-verde",
    category: "Paños y fibras",
    name: "Fibra verde",
    detail: "Uso operativo general",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "esponja-acero",
    category: "Paños y fibras",
    name: "Esponja acero inoxidable",
    detail: "Uso operativo específico",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "esponja-amarilla",
    category: "Paños y fibras",
    name: "Esponja amarilla",
    detail: "Uso operativo general",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "plumero-microfibra",
    category: "Utensilios",
    name: "Plumero microfibra",
    detail: "Para superficies y altura baja",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "ballerina",
    category: "Paños y fibras",
    name: "Ballerina",
    detail: "Uso operativo general",
    unit: "unidad",
    suggestedQty: 2,
    availability: "always",
  },
  {
    id: "kit-vidrios",
    category: "Vidrios y altura",
    name: "Corderito + Secador + Agarre secador",
    detail: "Kit vidrios. La limpieza se resuelve con detergente, no con limpiavidrios fuera de estándar.",
    unit: "kit",
    suggestedQty: 1,
    availability: "always",
  },
  {
    id: "globo-telaranas",
    category: "Vidrios y altura",
    name: "Globo para telarañas + cabo telescópico 2 tramos",
    detail: "2 mts + 2 mts = 4 mts",
    unit: "unidad",
    suggestedQty: 1,
    availability: "always",
  },
];

const standardizationRules = [
  {
    words: ["blem", "lustramueble", "lustra mueble", "lustramuebles", "lustra muebles"],
    message: "El estándar definido es Wood - Thames. Evitar Blem o lustramuebles fuera del kit.",
  },
  {
    words: ["limpiavidrios", "limpia vidrios", "vidriolim", "cristales"],
    message: "El estándar definido para vidrios es detergente ultraconcentrado + kit vidrios. No pedir limpiavidrios como insumo habitual.",
  },
  {
    words: ["cif", "crema cif", "limpiador cremoso"],
    message: "El estándar definido es Cream - Thames. Evitar marcas alternativas.",
  },
  {
    words: ["poett", "poet", "odorante", "desodorante piso"],
    message: "El estándar definido es Flower - Thames para pisos y Smell - Thames para ambiente.",
  },
  {
    words: ["lysoform", "lisoform", "aerosol desinfectante"],
    message: "Revisar si corresponde Alcohol AL70 - Thames para gimnasio o Bio Lav/Rapid Plus según superficie. Evitar marcas no estandarizadas.",
  },
];

const els = {};
let state = loadState();

window.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  initializeState();
  bindEvents();
  populateCategoryFilter();
  render();
});

function cacheElements() {
  [
    "btnResetAll",
    "btnNewOrder",
    "btnDeleteOrder",
    "orderCount",
    "ordersList",
    "supervisor",
    "consorcio",
    "frecuencia",
    "observaciones",
    "isGym",
    "hasGarage",
    "btnLoadSuggested",
    "btnClearItems",
    "searchCatalog",
    "categoryFilter",
    "catalogList",
    "exceptionName",
    "exceptionQty",
    "exceptionUnit",
    "exceptionReason",
    "exceptionHint",
    "btnAddException",
    "activeSummary",
    "itemsPreview",
    "alertsBox",
    "alertCount",
    "whatsappNumber",
    "btnCopyCurrent",
    "btnCopyAll",
    "btnWhatsApp",
    "btnEmail",
    "btnDownloadTxt",
    "btnMobileCopy",
    "btnMobileWhatsApp",
    "toast",
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  els.btnNewOrder.addEventListener("click", () => {
    const order = createOrder();
    const active = getActiveOrder();
    if (active) {
      order.supervisor = active.supervisor;
    }
    state.orders.push(order);
    state.activeId = order.id;
    saveAndRender("Pedido nuevo creado.");
  });

  els.btnResetAll.addEventListener("click", () => {
    if (!confirm("Esto elimina todos los pedidos cargados en este navegador. ¿Confirmás?")) return;
    state = { orders: [createOrder()], activeId: null };
    state.activeId = state.orders[0].id;
    saveAndRender("Se reinició el lote.");
  });

  els.btnDeleteOrder.addEventListener("click", () => {
    if (state.orders.length === 1) {
      showToast("Debe quedar al menos un pedido. Usá 'Vaciar materiales' o reiniciá el lote.");
      return;
    }
    const active = getActiveOrder();
    if (!active) return;
    if (!confirm(`Eliminar el pedido de ${active.consorcio || "servicio sin nombre"}?`)) return;
    state.orders = state.orders.filter((order) => order.id !== active.id);
    state.activeId = state.orders[0].id;
    saveAndRender("Pedido eliminado.");
  });

  ["supervisor", "consorcio", "frecuencia", "observaciones"].forEach((id) => {
    els[id].addEventListener("input", () => {
      const active = getActiveOrder();
      if (!active) return;
      active[id] = els[id].value;
      saveAndRender(null, { keepFocus: true });
    });
  });

  els.isGym.addEventListener("change", () => {
    const active = getActiveOrder();
    if (!active) return;
    active.isGym = els.isGym.checked;
    saveAndRender(active.isGym ? "Servicio marcado como gimnasio. Alcohol AL70 habilitado." : "Servicio ya no está marcado como gimnasio.");
  });

  els.hasGarage.addEventListener("change", () => {
    const active = getActiveOrder();
    if (!active) return;
    active.hasGarage = els.hasGarage.checked;
    saveAndRender(active.hasGarage ? "Servicio con cochera. Escobillón largo habilitado." : "Servicio sin cochera marcada.");
  });

  els.searchCatalog.addEventListener("input", () => renderCatalog());
  els.categoryFilter.addEventListener("change", () => renderCatalog());

  els.btnLoadSuggested.addEventListener("click", () => {
    const active = getActiveOrder();
    if (!active) return;
    getAvailableCatalog(active)
      .filter((material) => material.includeInSuggestedKit !== false)
      .forEach((material) => {
        const existing = active.items.find((item) => item.catalogId === material.id);
        if (!existing) {
          active.items.push(catalogToOrderItem(material, material.suggestedQty));
        }
      });
    saveAndRender("Kit inicial cargado. Incluye 1 paquete de bolsas negras y verdes 45x60, y 1 paquete de bolsas negras y verdes 90x110.");
  });

  els.btnClearItems.addEventListener("click", () => {
    const active = getActiveOrder();
    if (!active) return;
    if (!confirm("Esto elimina todos los materiales del pedido activo. ¿Confirmás?")) return;
    active.items = [];
    saveAndRender("Materiales del pedido activo eliminados.");
  });

  ["exceptionName", "exceptionQty", "exceptionUnit", "exceptionReason"].forEach((id) => {
    els[id].addEventListener("input", () => {
      renderExceptionHint();
    });
  });

  els.btnAddException.addEventListener("click", addExceptionItem);

  els.whatsappNumber.value = localStorage.getItem(WHATSAPP_KEY) || "";
  els.whatsappNumber.addEventListener("input", () => {
    localStorage.setItem(WHATSAPP_KEY, cleanPhone(els.whatsappNumber.value));
  });

  els.btnCopyCurrent.addEventListener("click", copyCurrentOrder);

  els.btnCopyAll.addEventListener("click", async () => {
    await copyText(buildAllOrdersText());
  });

  els.btnWhatsApp.addEventListener("click", sendAllOrdersByWhatsApp);

  if (els.btnMobileCopy) {
    els.btnMobileCopy.addEventListener("click", copyCurrentOrder);
  }

  if (els.btnMobileWhatsApp) {
    els.btnMobileWhatsApp.addEventListener("click", sendAllOrdersByWhatsApp);
  }

  els.btnEmail.addEventListener("click", () => {
    const subject = `Pedido de materiales Clean It - ${new Date().toLocaleDateString("es-AR")}`;
    const body = buildAllOrdersText();
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  els.btnDownloadTxt.addEventListener("click", () => {
    const blob = new Blob([buildAllOrdersText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pedido-materiales-cleanit-${dateForFileName()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

async function copyCurrentOrder() {
  await copyText(buildOrderText(getActiveOrder()));
}

function sendAllOrdersByWhatsApp() {
  const text = buildAllOrdersText();
  const phone = cleanPhone(els.whatsappNumber.value);
  localStorage.setItem(WHATSAPP_KEY, phone);
  const url = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function initializeState() {
  if (!state.orders || !Array.isArray(state.orders) || state.orders.length === 0) {
    state = { orders: [createOrder()], activeId: null };
  }
  state.orders = state.orders.map(normalizeOrder);
  if (!state.activeId || !state.orders.some((order) => order.id === state.activeId)) {
    state.activeId = state.orders[0].id;
  }
  saveState();
}

function createOrder() {
  const id = createId();
  return {
    id,
    supervisor: "",
    consorcio: "",
    frecuencia: "",
    observaciones: "",
    isGym: false,
    hasGarage: false,
    items: [],
    createdAt: new Date().toISOString(),
  };
}

function normalizeOrder(order) {
  return {
    id: order.id || createId(),
    supervisor: order.supervisor || "",
    consorcio: order.consorcio || "",
    frecuencia: order.frecuencia || "",
    observaciones: order.observaciones || "",
    isGym: Boolean(order.isGym),
    hasGarage: Boolean(order.hasGarage),
    items: Array.isArray(order.items) ? order.items.map(normalizeItem) : [],
    createdAt: order.createdAt || new Date().toISOString(),
  };
}

function normalizeItem(item) {
  return {
    id: item.id || createId(),
    catalogId: item.catalogId || null,
    name: item.name || "Material sin nombre",
    detail: item.detail || "",
    category: item.category || (item.exceptional ? "Excepcional" : "Materiales"),
    unit: item.unit || "unidad",
    qty: Number(item.qty) || 1,
    suggestedQty: Number(item.suggestedQty) || null,
    exceptional: Boolean(item.exceptional),
    reason: item.reason || "",
    standardWarning: item.standardWarning || "",
  };
}

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { orders: [createOrder()], activeId: null };
    return JSON.parse(raw);
  } catch (error) {
    console.warn("No se pudo leer el estado local", error);
    return { orders: [createOrder()], activeId: null };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveAndRender(message, options = {}) {
  saveState();
  render(options);
  if (message) showToast(message);
}

function getActiveOrder() {
  return state.orders.find((order) => order.id === state.activeId) || state.orders[0] || null;
}

function render(options = {}) {
  const activeElement = document.activeElement;
  const activeId = activeElement && activeElement.id;
  const selectionStart = activeElement && typeof activeElement.selectionStart === "number" ? activeElement.selectionStart : null;

  renderOrdersList();
  renderActiveForm();
  renderCatalog();
  renderPreview();
  renderExceptionHint();

  if (options.keepFocus && activeId && els[activeId]) {
    els[activeId].focus();
    if (selectionStart !== null && typeof els[activeId].setSelectionRange === "function") {
      els[activeId].setSelectionRange(selectionStart, selectionStart);
    }
  }
}

function renderOrdersList() {
  els.orderCount.textContent = state.orders.length;
  els.ordersList.innerHTML = "";

  state.orders.forEach((order, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `order-card ${order.id === state.activeId ? "active" : ""}`;
    const alerts = getOrderAlerts(order);
    button.innerHTML = `
      <strong>${escapeHtml(order.consorcio || `Pedido ${index + 1}`)}</strong>
      <small>${escapeHtml(order.frecuencia || "Frecuencia pendiente")}</small>
      <div class="order-card-footer">
        <span class="pill">${order.items.length} ítems</span>
        ${alerts.length ? `<span class="pill warning">${alerts.length} alertas</span>` : ""}
      </div>
    `;
    button.addEventListener("click", () => {
      state.activeId = order.id;
      saveAndRender(null);
    });
    els.ordersList.appendChild(button);
  });
}

function renderActiveForm() {
  const active = getActiveOrder();
  if (!active) return;
  els.supervisor.value = active.supervisor;
  els.consorcio.value = active.consorcio;
  els.frecuencia.value = active.frecuencia;
  els.observaciones.value = active.observaciones;
  els.isGym.checked = active.isGym;
  els.hasGarage.checked = active.hasGarage;
}

function populateCategoryFilter() {
  const categories = ["Todas", ...new Set(catalog.map((item) => item.category))];
  els.categoryFilter.innerHTML = categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
}

function renderCatalog() {
  const active = getActiveOrder();
  if (!active) return;

  const query = normalizeText(els.searchCatalog.value || "");
  const category = els.categoryFilter.value || "Todas";
  const available = getAvailableCatalog(active).filter((item) => {
    const matchesCategory = category === "Todas" || item.category === category;
    const haystack = normalizeText(`${item.name} ${item.detail} ${item.category}`);
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  els.catalogList.innerHTML = "";

  if (!available.length) {
    els.catalogList.innerHTML = `<div class="empty-state">No hay materiales que coincidan. Si realmente corresponde un insumo fuera del kit, cargalo como ítem excepcional con motivo.</div>`;
    return;
  }

  available.forEach((material) => {
    const template = document.getElementById("catalogItemTemplate");
    const node = template.content.cloneNode(true);
    const article = node.querySelector(".catalog-item");
    const chip = node.querySelector(".category-chip");
    const title = node.querySelector("h3");
    const detail = node.querySelector("p");
    const small = node.querySelector("small");
    const input = node.querySelector("input");
    const button = node.querySelector("button");

    const existing = active.items.find((item) => item.catalogId === material.id);
    chip.textContent = material.category;
    title.textContent = material.name;
    detail.textContent = material.detail;
    small.textContent = `Sugerido: ${formatQty(material.suggestedQty)} ${material.unit}${material.suggestedQty > 1 ? "s" : ""}`;
    input.value = existing ? existing.qty : material.suggestedQty;
    input.setAttribute("aria-label", `Cantidad para ${material.name}`);
    button.textContent = existing ? "Actualizar" : "Agregar";
    button.addEventListener("click", () => {
      const qty = parsePositiveNumber(input.value);
      if (!qty) {
        showToast("La cantidad debe ser mayor a cero.");
        return;
      }
      addCatalogItem(material, qty);
    });

    if (existing && Number(existing.qty) > Number(material.suggestedQty)) {
      article.classList.add("item-warning");
    }

    els.catalogList.appendChild(node);
  });
}

function getAvailableCatalog(order) {
  return catalog.filter((item) => {
    if (item.availability === "always") return true;
    if (item.availability === "gym") return order.isGym;
    if (item.availability === "garage") return order.hasGarage;
    return false;
  });
}

function addCatalogItem(material, qty) {
  const active = getActiveOrder();
  if (!active) return;
  const existing = active.items.find((item) => item.catalogId === material.id);
  if (existing) {
    existing.qty = qty;
  } else {
    active.items.push(catalogToOrderItem(material, qty));
  }
  const message = qty > material.suggestedQty
    ? `Alerta registrada: ${material.name} supera la cantidad sugerida.`
    : `${material.name} agregado al pedido.`;
  saveAndRender(message);
}

function catalogToOrderItem(material, qty) {
  return {
    id: createId(),
    catalogId: material.id,
    name: material.name,
    detail: material.detail,
    category: material.category,
    unit: material.unit,
    qty,
    suggestedQty: material.suggestedQty,
    exceptional: false,
    reason: "",
    standardWarning: "",
  };
}

function addExceptionItem() {
  const active = getActiveOrder();
  if (!active) return;

  const name = els.exceptionName.value.trim();
  const qty = parsePositiveNumber(els.exceptionQty.value);
  const unit = els.exceptionUnit.value.trim() || "unidad";
  const reason = els.exceptionReason.value.trim();
  const standardWarning = getStandardWarning(name);

  if (!name) {
    showToast("Ingresá el nombre del material excepcional.");
    return;
  }
  if (!qty) {
    showToast("La cantidad excepcional debe ser mayor a cero.");
    return;
  }
  if (!reason) {
    showToast("El ítem excepcional requiere motivo. Sin motivo, no hay control operativo.");
    return;
  }

  active.items.push({
    id: createId(),
    catalogId: null,
    name,
    detail: "Ítem fuera del kit estándar",
    category: "Excepcional",
    unit,
    qty,
    suggestedQty: null,
    exceptional: true,
    reason,
    standardWarning,
  });

  els.exceptionName.value = "";
  els.exceptionQty.value = "1";
  els.exceptionUnit.value = "unidad";
  els.exceptionReason.value = "";
  saveAndRender(standardWarning ? "Ítem excepcional agregado con alerta de estándar." : "Ítem excepcional agregado.");
}

function renderExceptionHint() {
  const name = els.exceptionName.value || "";
  const warning = getStandardWarning(name);
  if (!warning) {
    els.exceptionHint.classList.add("hidden");
    els.exceptionHint.textContent = "";
    return;
  }
  els.exceptionHint.classList.remove("hidden");
  els.exceptionHint.textContent = warning;
}

function getStandardWarning(name) {
  const normalized = normalizeText(name);
  if (!normalized) return "";
  const rule = standardizationRules.find((entry) => entry.words.some((word) => normalized.includes(normalizeText(word))));
  return rule ? rule.message : "";
}

function renderPreview() {
  const active = getActiveOrder();
  if (!active) return;
  const alerts = getOrderAlerts(active);

  els.activeSummary.innerHTML = `
    <p><strong>Consorcio / servicio:</strong> ${escapeHtml(active.consorcio || "Sin completar")}</p>
    <p><strong>Supervisor:</strong> ${escapeHtml(active.supervisor || "Sin completar")}</p>
    <p><strong>Frecuencia:</strong> ${escapeHtml(active.frecuencia || "Sin completar")}</p>
    <p><strong>Tipo:</strong> ${active.isGym ? "Gimnasio" : "Servicio general"}${active.hasGarage ? " · Con cochera" : ""}</p>
  `;

  els.alertCount.textContent = `${alerts.length} ${alerts.length === 1 ? "alerta" : "alertas"}`;
  els.itemsPreview.innerHTML = "";

  if (!active.items.length) {
    els.itemsPreview.innerHTML = `<div class="empty-state">Todavía no hay materiales cargados. Usá “Cargar kit sugerido” para partir del estándar y ajustar cantidades.</div>`;
  } else {
    active.items.forEach((item) => {
      els.itemsPreview.appendChild(createPreviewItem(item));
    });
  }

  if (alerts.length) {
    els.alertsBox.classList.remove("hidden");
    els.alertsBox.innerHTML = `<strong>Alertas registradas en este pedido</strong><ul>${alerts.map((alert) => `<li>${escapeHtml(alert)}</li>`).join("")}</ul>`;
  } else {
    els.alertsBox.classList.add("hidden");
    els.alertsBox.innerHTML = "";
  }
}

function createPreviewItem(item) {
  const wrapper = document.createElement("article");
  const isOver = item.suggestedQty && Number(item.qty) > Number(item.suggestedQty);
  wrapper.className = `preview-item ${isOver || item.standardWarning || item.exceptional ? "item-warning" : ""}`;
  wrapper.innerHTML = `
    <div class="preview-item-top">
      <div>
        <span class="category-chip">${escapeHtml(item.category)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.detail || item.unit)}</p>
        <small>${buildItemMeta(item)}</small>
      </div>
      ${item.exceptional ? `<span class="pill warning">Excepcional</span>` : ""}
    </div>
    ${item.reason ? `<p><strong>Motivo:</strong> ${escapeHtml(item.reason)}</p>` : ""}
    ${item.standardWarning ? `<p><strong>Alerta estándar:</strong> ${escapeHtml(item.standardWarning)}</p>` : ""}
    <div class="preview-controls">
      <label class="field">
        <span>Cantidad pedida</span>
        <input type="number" min="0.1" step="0.1" value="${Number(item.qty)}" aria-label="Editar cantidad de ${escapeHtml(item.name)}" />
      </label>
      <button class="icon-button" type="button" aria-label="Eliminar ${escapeHtml(item.name)}">Eliminar</button>
    </div>
  `;
  const input = wrapper.querySelector("input");
  const button = wrapper.querySelector("button");
  input.addEventListener("change", () => {
    const active = getActiveOrder();
    const target = active.items.find((entry) => entry.id === item.id);
    const qty = parsePositiveNumber(input.value);
    if (!target || !qty) {
      input.value = item.qty;
      showToast("La cantidad debe ser mayor a cero.");
      return;
    }
    target.qty = qty;
    saveAndRender(qty > Number(target.suggestedQty || Infinity) ? "Alerta registrada: supera la cantidad sugerida." : "Cantidad actualizada.");
  });
  button.addEventListener("click", () => {
    const active = getActiveOrder();
    active.items = active.items.filter((entry) => entry.id !== item.id);
    saveAndRender(`${item.name} eliminado.`);
  });
  return wrapper;
}

function buildItemMeta(item) {
  const base = `${formatQty(item.qty)} ${escapeHtml(item.unit)}`;
  if (item.suggestedQty) {
    const status = Number(item.qty) > Number(item.suggestedQty)
      ? ` · ALERTA: supera sugerido (${formatQty(item.suggestedQty)} ${escapeHtml(item.unit)})`
      : ` · sugerido ${formatQty(item.suggestedQty)} ${escapeHtml(item.unit)}`;
    return `${base}${status}`;
  }
  return `${base} · fuera del kit`;
}

function getOrderAlerts(order) {
  const alerts = [];

  if (!order.consorcio.trim()) alerts.push("Falta completar el nombre del consorcio/servicio.");
  if (!order.frecuencia.trim()) alerts.push("Falta completar la frecuencia del servicio.");

  order.items.forEach((item) => {
    if (item.suggestedQty && Number(item.qty) > Number(item.suggestedQty)) {
      alerts.push(`${item.name}: cantidad pedida ${formatQty(item.qty)} ${item.unit}, sugerido ${formatQty(item.suggestedQty)} ${item.unit}.`);
    }
    if (item.exceptional) {
      alerts.push(`${item.name}: ítem excepcional fuera del kit. Motivo: ${item.reason || "sin motivo cargado"}.`);
    }
    if (item.standardWarning) {
      alerts.push(`${item.name}: ${item.standardWarning}`);
    }
  });

  return alerts;
}

function buildOrderText(order) {
  if (!order) return "";
  const alerts = getOrderAlerts(order);
  const standardItems = order.items.filter((item) => !item.exceptional);
  const exceptionalItems = order.items.filter((item) => item.exceptional);

  const lines = [];
  lines.push("PEDIDO DE MATERIALES - CLEAN IT");
  lines.push(`Fecha: ${new Date().toLocaleDateString("es-AR")}`);
  lines.push(`Supervisor: ${order.supervisor || "Sin completar"}`);
  lines.push(`Consorcio / servicio: ${order.consorcio || "Sin completar"}`);
  lines.push(`Frecuencia: ${order.frecuencia || "Sin completar"}`);
  lines.push(`Tipo de servicio: ${order.isGym ? "Gimnasio" : "General"}${order.hasGarage ? " · Con cochera" : ""}`);
  if (order.observaciones.trim()) lines.push(`Observaciones: ${order.observaciones.trim()}`);
  lines.push("");
  lines.push("MATERIALES DEL KIT ESTÁNDAR:");

  if (!standardItems.length) {
    lines.push("- Sin materiales estándar cargados.");
  } else {
    groupItemsByCategory(standardItems).forEach(([category, items]) => {
      lines.push(`\n${category}:`);
      items.forEach((item) => {
        const overText = item.suggestedQty && Number(item.qty) > Number(item.suggestedQty)
          ? ` | ALERTA: supera sugerido ${formatQty(item.suggestedQty)} ${item.unit}`
          : "";
        lines.push(`- ${item.name} (${item.detail}): ${formatQty(item.qty)} ${item.unit}${overText}`);
      });
    });
  }

  lines.push("");
  lines.push("ÍTEMS EXCEPCIONALES / FUERA DEL KIT:");
  if (!exceptionalItems.length) {
    lines.push("- No se cargaron ítems excepcionales.");
  } else {
    exceptionalItems.forEach((item) => {
      lines.push(`- ${item.name}: ${formatQty(item.qty)} ${item.unit} | Motivo: ${item.reason || "Sin motivo"}${item.standardWarning ? ` | ALERTA: ${item.standardWarning}` : ""}`);
    });
  }

  lines.push("");
  lines.push("ALERTAS DEL PEDIDO:");
  if (!alerts.length) {
    lines.push("- Sin alertas.");
  } else {
    alerts.forEach((alert) => lines.push(`- ${alert}`));
  }

  return lines.join("\n");
}

function buildAllOrdersText() {
  return state.orders.map((order, index) => {
    return `========== PEDIDO ${index + 1} DE ${state.orders.length} ==========\n${buildOrderText(order)}`;
  }).join("\n\n");
}

function groupItemsByCategory(items) {
  const map = new Map();
  items.forEach((item) => {
    if (!map.has(item.category)) map.set(item.category, []);
    map.get(item.category).push(item);
  });
  return Array.from(map.entries());
}

async function copyText(text) {
  if (!text.trim()) {
    showToast("No hay texto para copiar.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Texto copiado al portapapeles.");
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("Texto copiado al portapapeles.");
  }
}

function showToast(message) {
  els.toast.textContent = message || "";
  if (!message) return;
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    els.toast.textContent = "";
  }, 3600);
}

function parsePositiveNumber(value) {
  const normalized = String(value).replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function formatQty(value) {
  return Number(value).toLocaleString("es-AR", { maximumFractionDigits: 2 });
}

function cleanPhone(value) {
  return String(value || "").replace(/[^0-9]/g, "");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function dateForFileName() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
