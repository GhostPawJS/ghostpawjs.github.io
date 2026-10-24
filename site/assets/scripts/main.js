(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const tablist = document.querySelector(".tabs");
  const tabs = tablist ? [...tablist.querySelectorAll('[role="tab"]')] : [];
  const panels = [...document.querySelectorAll(".folder")];

  function select(key, focus, push) {
    const tab = tabs.find((t) => t.id === "tab-" + key) || tabs[0];
    if (!tab) return;
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach((p) => { const on = p.id === tab.getAttribute("aria-controls"); p.hidden = !on; p.classList.toggle("open", on); });
    if (focus) tab.focus();
    if (push) {
      const url = new URL(location.href);
      url.searchParams.set("file", tab.id.slice(4));
      history.replaceState(null, "", url);
    }
  }

  if (tablist && tabs.length) {
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t.id.slice(4), false, true));
      t.addEventListener("keydown", (e) => {
        let j = null;
        if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") j = 0;
        if (e.key === "End") j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); select(tabs[j].id.slice(4), true, true); }
      });
    });
    const wanted = new URLSearchParams(location.search).get("file");
    const valid = tabs.some((t) => t.id === "tab-" + wanted);
    select(valid ? wanted : tabs[0].id.slice(4), false, false);
  }

  document.querySelectorAll(".copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const input = document.getElementById(btn.dataset.copy);
      if (!input) return;
      try {
        await navigator.clipboard.writeText(input.value);
      } catch {
        input.select();
        document.execCommand && document.execCommand("copy");
      }
      btn.textContent = "Copied";
      setTimeout(() => { btn.textContent = "Copy"; }, 2000);
    });
  });
})();
