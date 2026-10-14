/* @ds-bundle: {"format":4,"namespace":"NitNacDesignSystem_8d99cf","components":[{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"UpdateCard","sourcePath":"components/cards/UpdateCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DayPicker","sourcePath":"components/lists/DayPicker.jsx"},{"name":"ListPanel","sourcePath":"components/lists/ListPanel.jsx"},{"name":"ListRow","sourcePath":"components/lists/ListRow.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Avatar","sourcePath":"components/people/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/people/AvatarGroup.jsx"},{"name":"ProgressBar","sourcePath":"components/progress/ProgressBar.jsx"},{"name":"StatTile","sourcePath":"components/progress/StatTile.jsx"},{"name":"StepChecklist","sourcePath":"components/progress/StepChecklist.jsx"},{"name":"ILLUSTRATIONS","sourcePath":"components/shapes/IllustratedIcon.jsx"},{"name":"CRAFTS","sourcePath":"components/shapes/IllustratedIcon.jsx"},{"name":"IllustratedIcon","sourcePath":"components/shapes/IllustratedIcon.jsx"},{"name":"Scallop","sourcePath":"components/shapes/Scallop.jsx"},{"name":"StickerShape","sourcePath":"components/shapes/Sticker.jsx"},{"name":"Sticker","sourcePath":"components/shapes/Sticker.jsx"}],"sourceHashes":{"components/cards/ProjectCard.jsx":"dd25b9bdb729","components/cards/UpdateCard.jsx":"2add43e73c30","components/core/Button.jsx":"d320d758313e","components/core/Icon.jsx":"5c36dc69255b","components/core/IconButton.jsx":"49d59be4be0c","components/core/Input.jsx":"5b961ff4bd73","components/core/Tag.jsx":"407c8f8f1241","components/lists/DayPicker.jsx":"49fc5c665f47","components/lists/ListPanel.jsx":"e08100ace294","components/lists/ListRow.jsx":"466130beba88","components/navigation/TabBar.jsx":"893b022cbb01","components/people/Avatar.jsx":"31f5b7e632d6","components/people/AvatarGroup.jsx":"5bedf7bb27d2","components/progress/ProgressBar.jsx":"bb0f256f6c49","components/progress/StatTile.jsx":"ca77e96cfed2","components/progress/StepChecklist.jsx":"ed14eca8421e","components/shapes/IllustratedIcon.jsx":"965bbde42ffc","components/shapes/Scallop.jsx":"5c21e2471d76","components/shapes/Sticker.jsx":"ebf717268530","ui_kits/app/FriendsScreen.jsx":"2bdd2b96843b","ui_kits/app/HomeScreen.jsx":"75c5219acd2b","ui_kits/app/PostSheet.jsx":"2926c03d4c20","ui_kits/app/ProfileScreen.jsx":"216ce4666a80","ui_kits/app/ProjectDetail.jsx":"d8601085f8b5","ui_kits/app/ProjectsScreen.jsx":"f0a1b18eaacd","ui_kits/app/Shared.jsx":"aa754bf11295","ui_kits/app/data.js":"69678d431b7f"},"inlinedExternals":[],"unexposedExports":[{"name":"illustrationSrc","sourcePath":"components/shapes/IllustratedIcon.jsx"}]} */

(() => {

const __ds_ns = (window.NitNacDesignSystem_8d99cf = window.NitNacDesignSystem_8d99cf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
// Rounded line icons (Lucide geometry, ISC). Stroked in Crimson Ink by default.
const ICON_PATHS = {
  back: ['M15 18l-6-6 6-6'],
  forward: ['M9 18l6-6-6-6'],
  close: ['M18 6L6 18', 'M6 6l12 12'],
  search: ['circle:11,11,8', 'M21 21l-4.3-4.3'],
  heart: ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'],
  home: ['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'],
  projects: ['M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'],
  friends: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'circle:9,7,4', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  profile: ['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', 'circle:12,7,4'],
  plus: ['M5 12h14', 'M12 5v14'],
  minus: ['M5 12h14'],
  bell: ['M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', 'M10.3 21a1.94 1.94 0 0 0 3.4 0'],
  check: ['M20 6L9 17l-5-5'],
  calendar: ['rect:3,4,18,18,2', 'M16 2v4', 'M8 2v4', 'M3 10h18'],
  clock: ['circle:12,12,10', 'M12 6v6l4 2'],
  comment: ['M7.9 20A9 9 0 1 0 4 16.1L2 22Z'],
  camera: ['M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z', 'circle:12,13,3'],
  more: ['circle:5,12,1', 'circle:12,12,1', 'circle:19,12,1'],
  arrow: ['M5 12h14', 'M12 5l7 7-7 7'],
  pause: ['rect:6,4,4,16,1', 'rect:14,4,4,16,1'],
  flame: ['M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z'],
  filter: ['M22 3H2l8 9.46V19l4 2v-8.54L22 3z']
};
const SPARKLE = 'M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z';
function Icon({
  name,
  size = 20,
  color = 'var(--nn-crimson-ink)',
  strokeWidth = 2,
  style,
  title
}) {
  if (name === 'sparkle') {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      style: {
        display: 'block',
        flexShrink: 0,
        ...style
      },
      "aria-hidden": title ? undefined : true
    }, /*#__PURE__*/React.createElement("path", {
      d: SPARKLE,
      fill: color
    }));
  }
  const parts = ICON_PATHS[name] || [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true
  }, parts.map((p, i) => {
    if (p.startsWith('circle:')) {
      const [cx, cy, r] = p.slice(7).split(',');
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: cx,
        cy: cy,
        r: r
      });
    }
    if (p.startsWith('rect:')) {
      const [x, y, w, h, rx] = p.slice(5).split(',');
      return /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: y,
        width: w,
        height: h,
        rx: rx
      });
    }
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p
    });
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SOFT = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)'
};
function Button({
  variant = 'primary',
  color = 'rose',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  children,
  style
}) {
  const h = size === 'sm' ? 36 : 48;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: h,
    padding: size === 'sm' ? '0 16px' : '0 24px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-text)',
    fontSize: size === 'sm' ? 14 : 15,
    fontWeight: 600,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : undefined,
    border: 'var(--border-width) solid var(--nn-crimson-ink)',
    whiteSpace: 'nowrap'
  };
  let look, fg, cls;
  if (variant === 'primary') {
    look = {
      background: 'var(--action-primary)'
    };
    fg = 'var(--text-on-primary)';
    cls = 'nn-btn-primary';
  } else if (variant === 'outline') {
    look = {
      background: 'transparent'
    };
    fg = 'var(--nn-crimson-ink)';
    cls = 'nn-btn-outline';
  } else {
    look = {
      background: SOFT[color] || SOFT.rose,
      borderColor: 'transparent'
    };
    fg = 'var(--nn-crimson-ink)';
    cls = '';
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: 'nn-pressable ' + cls,
    style: {
      ...base,
      ...look,
      color: fg,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: fg
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 18,
    color: fg
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'card',
  dot = false,
  size = 44,
  disabled = false,
  selected = false,
  onClick,
  style
}) {
  const looks = {
    card: {
      bg: 'var(--nn-card)',
      fg: 'var(--nn-crimson-ink)',
      border: 'transparent'
    },
    ink: {
      bg: 'var(--nn-crimson-ink)',
      fg: 'var(--nn-cosmic-latte)',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--nn-crimson-ink)',
      border: 'var(--nn-crimson-ink)'
    }
  };
  const l = selected ? {
    bg: 'var(--state-selected)',
    fg: 'var(--nn-crimson-deep)',
    border: 'transparent'
  } : looks[variant] || looks.card;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    className: 'nn-pressable ' + (variant === 'card' && !selected ? 'nn-icon-btn' : ''),
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      background: l.bg,
      border: 'var(--border-width) solid ' + l.border,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45),
    color: l.fg
  }), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: size * 0.2,
      right: size * 0.22,
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--nn-crimson-ink)',
      boxShadow: '0 0 0 2px ' + (l.bg === 'transparent' ? 'var(--nn-cosmic-latte)' : l.bg)
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 3,
  id,
  style
}) {
  const fid = id || 'nn-in-' + (label || placeholder || '').replace(/\W+/g, '-').toLowerCase();
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--nn-crimson-ink)'
    }
  }, label), /*#__PURE__*/React.createElement(Field, {
    id: fid,
    value: value,
    placeholder: placeholder,
    rows: multiline ? rows : undefined,
    onChange: e => onChange && onChange(e.target.value),
    className: "nn-pressable",
    style: {
      minHeight: 44,
      padding: '11px 14px',
      boxSizing: 'border-box',
      width: '100%',
      resize: 'vertical',
      background: 'var(--nn-card)',
      border: 'var(--border-width) solid var(--nn-crimson-ink)',
      borderRadius: 'var(--radius-input)',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--nn-crimson-ink)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const FILLS = {
  rose: ['var(--nn-dusty-rose)', 'var(--nn-crimson-ink)'],
  pear: ['var(--nn-neon-pear)', 'var(--nn-crimson-ink)'],
  blue: ['var(--nn-arctic-blue)', 'var(--nn-crimson-ink)'],
  sienna: ['var(--nn-burnt-sienna)', 'var(--nn-crimson-deep)'],
  card: ['var(--nn-card)', 'var(--nn-crimson-ink)'],
  crimson: ['var(--nn-crimson-ink)', 'var(--nn-cosmic-latte)'],
  outline: ['transparent', 'var(--nn-crimson-ink)']
};
const CRAFT = {
  sewing: 'rose',
  crochet: 'blue',
  knitting: 'pear',
  mending: 'card'
};
const STATUS = {
  planning: {
    color: 'outline',
    label: 'Planning'
  },
  'in-progress': {
    color: 'pear',
    label: 'In progress'
  },
  paused: {
    color: 'blue',
    label: 'Paused'
  },
  finished: {
    color: 'rose',
    label: 'Finished',
    sparkle: true
  }
};
const CRAFT_LABEL = {
  sewing: 'Sewing',
  crochet: 'Crochet',
  knitting: 'Knitting',
  mending: 'Mending'
};
function Tag({
  children,
  color,
  craft,
  status,
  sparkle,
  size = 'md',
  selected = false,
  onClick,
  style
}) {
  let c = color,
    s = sparkle,
    label = children;
  if (craft) {
    c = c || CRAFT[craft];
    label = label || CRAFT_LABEL[craft];
    s = s ?? true;
  }
  if (status && STATUS[status]) {
    c = c || STATUS[status].color;
    label = label || STATUS[status].label;
    s = s ?? STATUS[status].sparkle;
  }
  c = c || 'rose';
  if (selected) c = 'sienna';
  const [bg, fg] = FILLS[c] || FILLS.rose;
  const h = size === 'sm' ? 28 : 36;
  const Tagname = onClick ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tagname, {
    type: onClick ? 'button' : undefined,
    onClick: onClick,
    "aria-pressed": onClick ? selected : undefined,
    className: onClick ? 'nn-pressable' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: h,
      padding: size === 'sm' ? '0 12px' : '0 16px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      border: 'var(--border-width) solid ' + (c === 'outline' ? 'var(--nn-crimson-ink)' : 'transparent'),
      fontFamily: 'var(--font-text)',
      fontSize: size === 'sm' ? 13 : 14,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, s && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkle",
    size: size === 'sm' ? 12 : 14,
    color: fg
  }), label);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/lists/DayPicker.jsx
try { (() => {
const DEFAULT_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
function DayPicker({
  days = DEFAULT_DAYS,
  selected = [],
  today,
  onChange,
  multiple = true,
  size = 44,
  style
}) {
  const sel = new Set(selected);
  const toggle = i => {
    if (!onChange) return;
    if (multiple) {
      const n = new Set(sel);
      n.has(i) ? n.delete(i) : n.add(i);
      onChange([...n].sort((a, b) => a - b));
    } else onChange([i]);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Pick craft days",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 4,
      ...style
    }
  }, days.map((d, i) => {
    const on = sel.has(i);
    const isToday = today === i;
    return /*#__PURE__*/React.createElement("button", {
      key: d + i,
      type: "button",
      "aria-pressed": on,
      onClick: () => toggle(i),
      className: "nn-pressable",
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        padding: 0,
        cursor: 'pointer',
        background: on ? 'var(--state-selected)' : 'var(--nn-card)',
        border: 'var(--focus-width) solid ' + (isToday ? 'var(--nn-crimson-ink)' : 'transparent'),
        color: on ? 'var(--nn-crimson-deep)' : 'var(--nn-crimson-ink)',
        fontFamily: 'var(--font-text)',
        fontSize: 14,
        fontWeight: 600
      }
    }, d);
  }));
}
Object.assign(__ds_scope, { DayPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/DayPicker.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListPanel.jsx
try { (() => {
const FILL = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)'
};
function ListPanel({
  title,
  action,
  color = 'pear',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: FILL[color] || color,
      borderRadius: 'var(--radius-sheet)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      padding: '8px 10px 4px'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.1,
      color: 'var(--nn-crimson-ink)'
    }
  }, title), action), children);
}
Object.assign(__ds_scope, { ListPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListPanel.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListRow.jsx
try { (() => {
function ListRow({
  title,
  subtitle,
  icon,
  leading,
  trailing,
  chevron = true,
  onClick,
  style
}) {
  const Tagname = onClick ? 'button' : 'div';
  return /*#__PURE__*/React.createElement(Tagname, {
    type: onClick ? 'button' : undefined,
    onClick: onClick,
    className: onClick ? 'nn-pressable' : undefined,
    style: {
      width: '100%',
      minHeight: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 12px 8px 8px',
      boxSizing: 'border-box',
      background: 'var(--nn-card)',
      border: 'none',
      borderRadius: 'var(--radius-row)',
      textAlign: 'left',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, leading || icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--nn-cosmic-latte)',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 1.25,
      color: 'var(--nn-crimson-ink)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      lineHeight: 1.3,
      color: 'var(--nn-ink-muted)'
    }
  }, subtitle)), trailing, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "forward",
    size: 18
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
const TABS = [{
  id: 'home',
  label: 'Home',
  icon: 'home'
}, {
  id: 'projects',
  label: 'Projects',
  icon: 'projects'
}, {
  id: 'friends',
  label: 'Friends',
  icon: 'friends'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'profile'
}];
function TabBar({
  active = 'home',
  onChange,
  onPost,
  notch = 'var(--nn-cosmic-latte)',
  style
}) {
  const tab = t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      "aria-label": t.label,
      "aria-current": on ? 'page' : undefined,
      onClick: () => onChange && onChange(t.id),
      className: "nn-pressable",
      style: {
        flex: 1,
        height: 64,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        borderRadius: 'var(--radius-pill)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 22,
      color: on ? 'var(--nn-cosmic-latte)' : 'var(--nn-dusty-rose)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: on ? 'var(--nn-cosmic-latte)' : 'transparent'
      }
    }));
  };
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      position: 'relative',
      height: 64,
      background: 'var(--nn-crimson-deep)',
      borderRadius: 'var(--radius-tabbar)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...style
    }
  }, TABS.slice(0, 2).map(tab), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      flexShrink: 0
    }
  }), TABS.slice(2).map(tab), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Post an update",
    onClick: onPost,
    className: "nn-pressable nn-btn-primary",
    style: {
      position: 'absolute',
      left: '50%',
      top: -22,
      marginLeft: -30,
      width: 60,
      height: 60,
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'var(--nn-crimson-ink)',
      border: '5px solid ' + notch,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 26,
    strokeWidth: 2.5,
    color: "var(--nn-cosmic-latte)"
  })));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/people/Avatar.jsx
try { (() => {
const FILL = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)',
  sienna: 'var(--nn-burnt-sienna)'
};
function Avatar({
  name = '',
  initials,
  color = 'rose',
  size = 44,
  ring = 'var(--nn-cosmic-latte)',
  style
}) {
  const ini = initials || name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name || ini,
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      background: FILL[color] || color,
      color: color === 'sienna' ? 'var(--nn-crimson-deep)' : 'var(--nn-crimson-ink)',
      boxShadow: ring ? '0 0 0 2px ' + ring : 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.38),
      lineHeight: 1,
      ...style
    }
  }, ini);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/people/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/cards/UpdateCard.jsx
try { (() => {
function UpdateCard({
  author,
  time,
  project,
  note,
  photo,
  photoBackdrop = 'rose',
  reactions = [],
  onReact,
  style
}) {
  const bg = {
    rose: 'var(--nn-dusty-rose)',
    pear: 'var(--nn-neon-pear)',
    blue: 'var(--nn-arctic-blue)'
  }[photoBackdrop] || photoBackdrop;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--nn-card)',
      borderRadius: 'var(--radius-card)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: author?.name,
    color: author?.color,
    size: 40,
    ring: null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--nn-crimson-ink)',
      lineHeight: 1.2
    }
  }, author?.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      color: 'var(--nn-ink-muted)',
      lineHeight: 1.3
    }
  }, project ? /*#__PURE__*/React.createElement(React.Fragment, null, "on ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, project), " \xB7 ") : null, time))), photo && /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 16,
      padding: 12,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: '100%',
      maxHeight: 240,
      objectFit: 'cover',
      borderRadius: 12,
      display: 'block'
    }
  })), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      lineHeight: 1.45,
      color: 'var(--nn-crimson-ink)',
      textWrap: 'pretty'
    }
  }, note), reactions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, reactions.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r.label,
    type: "button",
    onClick: () => onReact && onReact(i),
    "aria-pressed": !!r.active,
    className: "nn-pressable",
    style: {
      height: 36,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
      background: r.active ? 'var(--nn-dusty-rose)' : 'transparent',
      border: 'var(--border-width) solid ' + (r.active ? 'transparent' : 'var(--nn-crimson-ink)'),
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--nn-crimson-ink)'
    }
  }, r.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon,
    size: 16
  }), r.label, r.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.count)))));
}
Object.assign(__ds_scope, { UpdateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/UpdateCard.jsx", error: String((e && e.message) || e) }); }

// components/people/AvatarGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AvatarGroup({
  people = [],
  max = 4,
  size = 36,
  ring = 'var(--nn-cosmic-latte)',
  style
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  const overlap = Math.round(size * 0.28);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({
    key: p.name + i
  }, p, {
    size: size,
    ring: ring,
    style: {
      marginLeft: i ? -overlap : 0
    }
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -overlap,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--nn-card)',
      boxShadow: '0 0 0 2px ' + ring,
      border: 'var(--border-width) solid var(--nn-crimson-ink)',
      boxSizing: 'border-box',
      color: 'var(--nn-crimson-ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      fontSize: Math.round(size * 0.34)
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/people/AvatarGroup.jsx", error: String((e && e.message) || e) }); }

// components/progress/ProgressBar.jsx
try { (() => {
const FILL = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)',
  sienna: 'var(--nn-burnt-sienna)',
  crimson: 'var(--nn-crimson-ink)'
};
function ProgressBar({
  value = 0,
  total,
  color = 'rose',
  label,
  showLabel = true,
  track = 'page',
  height = 12,
  cheer = true,
  style
}) {
  const pct = total ? Math.round(value / total * 100) : Math.round(value);
  const clamped = Math.max(0, Math.min(100, pct));
  const text = label ?? (total ? `${value} of ${total} steps` : `${clamped}%`);
  const cheerText = cheer ? clamped >= 100 ? 'All done!' : clamped >= 50 && clamped < 60 ? 'Halfway there!' : null : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": clamped,
    "aria-label": text,
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-width) solid var(--nn-crimson-ink)',
      background: track === 'card' ? 'var(--nn-card)' : 'var(--nn-cosmic-latte)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: clamped + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: FILL[color] || color,
      transition: 'width var(--dur-base) var(--ease-soft)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--nn-ink-muted)',
      fontWeight: 600
    }
  }, text), cheerText && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--nn-crimson-ink)',
      fontWeight: 600
    }
  }, cheerText)));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/progress/StepChecklist.jsx
try { (() => {
function StepChecklist({
  steps = [],
  onToggle,
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.id ?? i
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onToggle && onToggle(i, !s.done),
    "aria-pressed": !!s.done,
    className: "nn-pressable",
    style: {
      width: '100%',
      minHeight: 44,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 4px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-input)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'var(--border-width) solid var(--nn-crimson-ink)',
      background: s.done ? 'var(--nn-crimson-ink)' : 'transparent'
    }
  }, s.done && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 2.5,
    color: "var(--nn-cosmic-latte)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      lineHeight: 1.3,
      color: s.done ? 'var(--nn-ink-muted)' : 'var(--nn-crimson-ink)',
      textDecoration: s.done ? 'line-through' : 'none',
      textDecorationThickness: '1.5px'
    }
  }, s.label), s.note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      color: 'var(--nn-ink-muted)'
    }
  }, s.note))))));
}
Object.assign(__ds_scope, { StepChecklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/StepChecklist.jsx", error: String((e && e.message) || e) }); }

// components/shapes/IllustratedIcon.jsx
try { (() => {
const ILLUSTRATIONS = {
  'sewing-machine': 'sewing-machine.png',
  scissors: 'scissors.png',
  spool: 'spool.png',
  iron: 'iron.png',
  pins: 'pins.png',
  'pin-cushion': 'pin-cushion.png',
  bow: 'bow.png',
  'yarn-hook': 'yarn-hook.png',
  'yarn-basket': 'yarn-basket.png'
};
const CRAFTS = {
  sewing: {
    art: 'sewing-machine',
    tint: 'rose'
  },
  crochet: {
    art: 'yarn-hook',
    tint: 'blue'
  },
  knitting: {
    art: 'yarn-basket',
    tint: 'pear'
  },
  mending: {
    art: 'spool',
    tint: 'rose'
  }
};
const TINT = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)',
  sienna: 'var(--nn-burnt-sienna)',
  card: 'var(--nn-card)',
  none: 'transparent'
};
function illustrationSrc(name, assetBase) {
  const base = assetBase ?? (typeof window !== 'undefined' && window.NITNAC_ASSETS) ?? 'assets/';
  return base + 'illustrations/' + (ILLUSTRATIONS[name] || ILLUSTRATIONS[(CRAFTS[name] || {}).art] || name);
}
function IllustratedIcon({
  craft,
  name,
  tint,
  size = 64,
  assetBase,
  label,
  style
}) {
  const art = name || (CRAFTS[craft] || CRAFTS.sewing).art;
  const t = tint || (craft && CRAFTS[craft] ? CRAFTS[craft].tint : 'rose');
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      background: TINT[t] || t,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: illustrationSrc(art, assetBase),
    alt: "",
    style: {
      width: '70%',
      height: '70%',
      objectFit: 'contain',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { ILLUSTRATIONS, CRAFTS, illustrationSrc, IllustratedIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/IllustratedIcon.jsx", error: String((e && e.message) || e) }); }

// components/progress/StatTile.jsx
try { (() => {
const FILL = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)',
  card: 'var(--nn-card)'
};
function StatTile({
  value,
  label,
  color = 'rose',
  icon,
  illustration,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FILL[color] || color,
      borderRadius: 'var(--radius-card)',
      padding: 16,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, illustration ? /*#__PURE__*/React.createElement(__ds_scope.IllustratedIcon, {
    name: illustration,
    tint: "card",
    size: 40
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--nn-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 26,
      fontWeight: 600,
      lineHeight: 1,
      color: 'var(--nn-crimson-ink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.2,
      color: 'var(--nn-crimson-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/shapes/Scallop.jsx
try { (() => {
const FILL = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)',
  sienna: 'var(--nn-burnt-sienna)'
};

// 3x3 bubble scallop, after the reference product cards.
function Scallop({
  color = 'rose',
  children,
  aspect = 1,
  style
}) {
  const fill = FILL[color] || color;
  const c = [17, 50, 83];
  const dots = [];
  c.forEach(x => c.forEach(y => {
    if (!(x === 50 && y === 50)) dots.push([x, y]);
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: String(aspect),
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "17",
    y: "17",
    width: "66",
    height: "66",
    fill: fill
  }), dots.map(([x, y], i) => /*#__PURE__*/React.createElement("ellipse", {
    key: i,
    cx: x,
    cy: y,
    rx: "17",
    ry: "17",
    fill: fill
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { Scallop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/Scallop.jsx", error: String((e && e.message) || e) }); }

// components/shapes/Sticker.jsx
try { (() => {
const FILL = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)',
  sienna: 'var(--nn-burnt-sienna)',
  card: 'var(--nn-card)',
  crimson: 'var(--nn-crimson-ink)',
  deep: 'var(--nn-crimson-deep)'
};
const INK = {
  sienna: 'var(--nn-crimson-deep)',
  crimson: 'var(--nn-cosmic-latte)',
  deep: 'var(--nn-cosmic-latte)'
};
function wavy(n, amp) {
  const pts = [];
  for (let i = 0; i <= 180; i++) {
    const t = i / 180 * Math.PI * 2;
    const r = 46 * (1 - amp + amp * Math.cos(n * t));
    pts.push((50 + r * Math.cos(t)).toFixed(2) + ',' + (50 + r * Math.sin(t)).toFixed(2));
  }
  return 'M' + pts.join('L') + 'Z';
}
function burst(n, inner) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const t = i / (n * 2) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 46 : 46 * inner;
    pts.push((50 + r * Math.cos(t)).toFixed(2) + ',' + (50 + r * Math.sin(t)).toFixed(2));
  }
  return 'M' + pts.join('L') + 'Z';
}
function StickerShape({
  shape = 'flower',
  fill = 'var(--nn-dusty-rose)'
}) {
  let el;
  if (shape === 'flower') el = /*#__PURE__*/React.createElement("path", {
    d: wavy(8, 0.14),
    fill: fill
  });else if (shape === 'burst') el = /*#__PURE__*/React.createElement("path", {
    d: burst(12, 0.8),
    fill: fill,
    stroke: fill,
    strokeWidth: "5",
    strokeLinejoin: "round"
  });else if (shape === 'square') el = /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "88",
    height: "88",
    rx: "18",
    fill: fill
  });else el = /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "47",
    fill: fill
  });
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, el);
}
function Sticker({
  shape = 'flower',
  color = 'rose',
  size = 120,
  rotate = -6,
  children,
  subtext,
  style
}) {
  const r = Math.max(-12, Math.min(12, rotate));
  const fg = INK[color] || 'var(--nn-crimson-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      transform: `rotate(${r}deg)`,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement(StickerShape, {
    shape: shape,
    fill: FILL[color] || FILL.rose
  }), children != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-title)',
      color: fg,
      fontSize: Math.max(16, Math.round(size * 0.19)),
      lineHeight: 1,
      padding: '0 14%'
    }
  }, children), subtext && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-text)',
      fontWeight: 600,
      color: fg,
      fontSize: Math.max(12, Math.round(size * 0.1)),
      marginTop: 4
    }
  }, subtext));
}
Object.assign(__ds_scope, { StickerShape, Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shapes/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
const TITLE = {
  rose: 'var(--nn-dusty-rose)',
  pear: 'var(--nn-neon-pear)',
  blue: 'var(--nn-arctic-blue)'
};
function ProjectCard({
  title,
  owner,
  craft = 'sewing',
  status = 'in-progress',
  backdrop,
  photo,
  stepsDone,
  stepsTotal,
  progress,
  nextStep,
  titleTone = 'ink',
  stickerColor = 'sienna',
  liked = false,
  onLike,
  onOpen,
  actions,
  assetBase,
  style
}) {
  const bd = backdrop || (__ds_scope.CRAFTS[craft] || __ds_scope.CRAFTS.sewing).tint;
  const finished = status === 'finished';
  const ownerColor = owner?.color || bd;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--nn-card)',
      borderRadius: 'var(--radius-card)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Scallop, {
    color: bd
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: '88%',
      height: '88%',
      objectFit: 'cover',
      borderRadius: '50%',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.illustrationSrc(craft, assetBase),
    alt: "",
    style: {
      width: '78%',
      height: '78%',
      objectFit: 'contain',
      display: 'block'
    }
  })), onLike && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: liked ? 'Unlike' : 'Like',
    size: 36,
    selected: false,
    variant: liked ? 'ink' : 'card',
    onClick: onLike,
    style: {
      position: 'absolute',
      top: 6,
      right: 6
    }
  }), finished && /*#__PURE__*/React.createElement(__ds_scope.Sticker, {
    shape: "burst",
    color: stickerColor,
    size: 84,
    rotate: -10,
    style: {
      position: 'absolute',
      left: -6,
      bottom: -4
    }
  }, "Finished!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    onClick: onOpen,
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.05,
      color: titleTone === 'backdrop' ? TITLE[bd] : 'var(--nn-crimson-ink)',
      cursor: onOpen ? 'pointer' : 'default'
    }
  }, title), owner && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: owner.name,
    color: owner.color,
    size: 20,
    ring: null
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      color: 'var(--nn-ink-muted)'
    }
  }, owner.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    craft: craft,
    size: "sm"
  }), /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    status: status,
    size: "sm"
  })), (stepsTotal || progress != null) && /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    color: ownerColor,
    value: stepsTotal ? stepsDone : progress,
    total: stepsTotal
  }), nextStep && !finished && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      lineHeight: 1.35,
      color: 'var(--nn-crimson-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Next: "), nextStep), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, actions));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FriendsScreen.jsx
try { (() => {
function FriendsScreen({
  friends,
  projects
}) {
  const {
    IconButton,
    ListPanel,
    ListRow,
    Avatar,
    DayPicker,
    Button,
    Sticker
  } = nnKit;
  const [days, setDays] = React.useState([3]);
  const names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: "Invite a friend"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '8px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 44,
      lineHeight: 1
    }
  }, "Our table"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      color: 'var(--nn-ink-muted)'
    }
  }, "Four friends, nine projects, zero pressure."), /*#__PURE__*/React.createElement(Sticker, {
    shape: "square",
    color: "pear",
    size: 70,
    rotate: 9,
    style: {
      position: 'absolute',
      right: 24,
      top: -6
    }
  }, "4")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(ListPanel, {
    title: "Friends",
    color: "rose"
  }, friends.map(f => /*#__PURE__*/React.createElement(ListRow, {
    key: f.name,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: f.name,
      color: f.color,
      size: 40,
      ring: null
    }),
    title: f.name,
    subtitle: `${f.crafts} · ${projects.filter(p => friends[p.owner].name === f.name && p.status !== 'finished').length} on the go`,
    onClick: () => {}
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 16px 0',
      background: 'var(--nn-arctic-blue)',
      borderRadius: 28,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 20
    }
  }, "Plan a craft night"), /*#__PURE__*/React.createElement(DayPicker, {
    selected: days,
    today: 2,
    onChange: setDays,
    size: 40
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, days.length ? 'We meet on ' + days.map(d => names[d]).join(' and ') + '.' : 'Pick a day that works for you.'), /*#__PURE__*/React.createElement(Button, {
    disabled: !days.length
  }, "Send to the group")));
}
window.FriendsScreen = FriendsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FriendsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
function HomeScreen({
  projects,
  updates,
  friends,
  me,
  onOpen,
  onReact,
  go
}) {
  const {
    IconButton,
    Sticker,
    ProjectCard,
    UpdateCard,
    Avatar,
    AvatarGroup
  } = nnKit;
  const mine = projects.filter(p => friends[p.owner].name === me.name && p.status !== 'finished');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
    left: /*#__PURE__*/React.createElement(Avatar, {
      name: me.name,
      color: me.color,
      size: 44,
      ring: null
    }),
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications",
      dot: true
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '16px 16px 8px',
      minHeight: 170
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 44,
      lineHeight: 1.02,
      maxWidth: 230,
      position: 'relative',
      zIndex: 1
    }
  }, "Hi Mia, what are we making?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 17,
      lineHeight: 1.35,
      maxWidth: 220
    }
  }, "Four of us stitched this week. Lovely."), /*#__PURE__*/React.createElement(Sticker, {
    shape: "flower",
    color: "rose",
    size: 104,
    rotate: -8,
    style: {
      position: 'absolute',
      right: 20,
      top: 0
    }
  }, "3 on the go"), /*#__PURE__*/React.createElement(Sticker, {
    shape: "circle",
    color: "blue",
    size: 72,
    rotate: 10,
    style: {
      position: 'absolute',
      right: 6,
      top: 92
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/scissors.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 30,
      top: 96,
      height: 72,
      transform: 'rotate(18deg)'
    }
  })), /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => go('projects')
    }, "See all")
  }, "Your projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      padding: '0 16px 4px',
      scrollbarWidth: 'none'
    }
  }, mine.map(p => {
    const pr = progressOf(p);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: () => onOpen(p.id),
      style: {
        width: 230,
        flexShrink: 0,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      title: p.title,
      craft: p.craft,
      status: p.status,
      backdrop: p.backdrop,
      photo: NN_PHOTO(p.photo),
      owner: friends[p.owner],
      stepsDone: pr.done,
      stepsTotal: pr.total,
      nextStep: nextOf(p)
    }));
  })), /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement(AvatarGroup, {
      people: friends,
      max: 4,
      size: 28
    })
  }, "From the table"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '0 16px'
    }
  }, updates.map((u, i) => /*#__PURE__*/React.createElement(UpdateCard, {
    key: i,
    author: friends[u.author],
    time: u.time,
    project: u.project,
    note: u.note,
    photo: NN_PHOTO(u.photo),
    photoBackdrop: u.backdrop,
    reactions: u.reactions,
    onReact: r => onReact(i, r)
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/PostSheet.jsx
try { (() => {
function PostSheet({
  projects,
  friends,
  me,
  onClose,
  onPost,
  initialProject
}) {
  const {
    IconButton,
    Input,
    Tag,
    Button,
    IllustratedIcon
  } = nnKit;
  const mine = projects.filter(p => friends[p.owner].name === me.name);
  const [pid, setPid] = React.useState(initialProject || mine[0] && mine[0].id);
  const [note, setNote] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background: 'rgba(90,18,32,.35)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--nn-card)',
      borderRadius: '28px 28px 0 0',
      padding: '16px 16px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 28
    }
  }, "Share progress"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "close",
    label: "Close",
    variant: "outline",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Which project?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, mine.map(p => /*#__PURE__*/React.createElement(Tag, {
    key: p.id,
    color: "outline",
    selected: pid === p.id,
    onClick: () => setPid(p.id)
  }, p.title)))), /*#__PURE__*/React.createElement(Input, {
    label: "What did you do?",
    multiline: true,
    rows: 3,
    value: note,
    onChange: setNote,
    placeholder: "Finished the body, seeds next."
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nn-pressable",
    style: {
      height: 88,
      borderRadius: 20,
      border: '1.5px dashed var(--nn-crimson-ink)',
      background: 'var(--nn-cosmic-latte)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--nn-crimson-ink)'
    }
  }, /*#__PURE__*/React.createElement(IllustratedIcon, {
    name: "pin-cushion",
    tint: "rose",
    size: 48
  }), "Add a photo"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: !note.trim(),
    onClick: () => onPost(pid, note.trim())
  }, "Post to the table")));
}
window.PostSheet = PostSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/PostSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProfileScreen.jsx
try { (() => {
function ProfileScreen({
  me,
  projects,
  friends
}) {
  const {
    IconButton,
    Avatar,
    StatTile,
    ListPanel,
    ListRow,
    IllustratedIcon
  } = nnKit;
  const finished = projects.filter(p => p.status === 'finished').length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Profile",
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "more",
      label: "More"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: me.name,
    color: me.color,
    size: 72,
    ring: null
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1
    }
  }, me.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--nn-ink-muted)'
    }
  }, "Crochet, knitting \xB7 since March"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8,
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: finished + 11,
    label: "Finished",
    color: "rose",
    illustration: "bow"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "46",
    label: "Hours stitched",
    color: "pear",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "5",
    label: "Day streak",
    color: "blue",
    icon: "flame"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(ListPanel, {
    title: "My crafts",
    color: "pear"
  }, /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(IllustratedIcon, {
      craft: "crochet",
      size: 40,
      tint: "blue"
    }),
    title: "Crochet",
    subtitle: "2 on the go",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(IllustratedIcon, {
      craft: "knitting",
      size: 40,
      tint: "rose"
    }),
    title: "Knitting",
    subtitle: "Nothing yet. Want to start something?",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    leading: /*#__PURE__*/React.createElement(IllustratedIcon, {
      craft: "mending",
      size: 40,
      tint: "blue"
    }),
    title: "Mending",
    subtitle: "1 planned",
    onClick: () => {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement(ListPanel, {
    color: "blue"
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "bell",
    title: "Notifications",
    subtitle: "Cheers and new posts",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "calendar",
    title: "Craft reminders",
    subtitle: "Thursdays, 7pm",
    onClick: () => {}
  }))));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProjectDetail.jsx
try { (() => {
function ProjectDetail({
  project: p,
  friends,
  onBack,
  onToggle,
  onPost
}) {
  const {
    IconButton,
    Scallop,
    Sticker,
    Tag,
    ProgressBar,
    StepChecklist,
    Button,
    Avatar,
    illustrationSrc
  } = nnKit;
  const [liked, setLiked] = React.useState(false);
  const owner = friends[p.owner];
  const pr = progressOf(p);
  const finished = pr.done === pr.total;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Project",
    left: /*#__PURE__*/React.createElement(IconButton, {
      icon: "back",
      label: "Back",
      onClick: onBack
    }),
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "heart",
      label: "Like",
      variant: liked ? 'ink' : 'card',
      onClick: () => setLiked(!liked)
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '8px 40px 0'
    }
  }, /*#__PURE__*/React.createElement(Scallop, {
    color: p.backdrop
  }, p.photo ? /*#__PURE__*/React.createElement("img", {
    src: NN_PHOTO(p.photo),
    alt: "",
    style: {
      width: '88%',
      height: '88%',
      objectFit: 'cover',
      borderRadius: '50%'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: '../../assets/illustrations/' + {
      sewing: 'sewing-machine',
      crochet: 'yarn-hook',
      knitting: 'yarn-basket',
      mending: 'spool'
    }[p.craft] + '.png',
    alt: "",
    style: {
      width: '78%',
      height: '78%',
      objectFit: 'contain'
    }
  })), finished && /*#__PURE__*/React.createElement(Sticker, {
    shape: "burst",
    color: "sienna",
    size: 110,
    rotate: -10,
    style: {
      position: 'absolute',
      left: 12,
      bottom: -6
    }
  }, "Finished!")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.05
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: owner.name,
    color: owner.color,
    size: 28,
    ring: null
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, owner.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    craft: p.craft,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Tag, {
    status: finished ? 'finished' : p.status,
    size: "sm"
  })), /*#__PURE__*/React.createElement(ProgressBar, {
    value: pr.done,
    total: pr.total,
    color: owner.color,
    track: "card"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px 16px 0',
      background: 'var(--nn-card)',
      borderRadius: 20,
      padding: '12px 12px 8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '4px 4px 4px',
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 20
    }
  }, "Steps"), /*#__PURE__*/React.createElement(StepChecklist, {
    steps: p.steps,
    onToggle: (i, d) => onToggle(p.id, i, d)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "camera",
    fullWidth: true,
    onClick: onPost
  }, "Post an update"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "plus"
  }, "Add step")));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProjectsScreen.jsx
try { (() => {
function ProjectsScreen({
  projects,
  friends,
  onOpen
}) {
  const {
    IconButton,
    Tag,
    ProjectCard
  } = nnKit;
  const [filter, setFilter] = React.useState('all');
  const filters = [['all', 'All'], ['sewing', 'Sewing'], ['crochet', 'Crochet'], ['knitting', 'Knitting'], ['mending', 'Mending']];
  const list = projects.filter(p => filter === 'all' || p.craft === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "filter",
      label: "Sort"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 44,
      lineHeight: 1
    }
  }, "Projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      color: 'var(--nn-ink-muted)'
    }
  }, "Everything on the table, yours and ours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '16px 16px 4px',
      scrollbarWidth: 'none'
    }
  }, filters.map(([id, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: id,
    onClick: () => setFilter(id),
    selected: filter === id,
    color: "card"
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      padding: '12px 16px'
    }
  }, list.map(p => {
    const pr = progressOf(p);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: () => onOpen(p.id),
      style: {
        cursor: 'pointer',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, {
      title: p.title,
      craft: p.craft,
      status: p.status,
      backdrop: p.backdrop,
      photo: NN_PHOTO(p.photo),
      owner: friends[p.owner],
      stepsDone: pr.done,
      stepsTotal: pr.total,
      stickerColor: "rose",
      style: {
        padding: 12
      }
    }));
  })));
}
window.ProjectsScreen = ProjectsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shared.jsx
try { (() => {
const nnKit = window.NitNacDesignSystem_8d99cf;
const NN_PHOTO = f => f ? '../../assets/photos/' + f : undefined;
function ScreenHeader({
  title,
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      padding: '8px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      minWidth: 44
    }
  }, left), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      minWidth: 44,
      justifyContent: 'flex-end'
    }
  }, right));
}
function SectionTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '0 16px',
      margin: '24px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.1
    }
  }, children), action);
}
function TextLink({
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    className: "nn-pressable",
    style: {
      background: 'none',
      border: 'none',
      padding: '4px 0',
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--nn-crimson-ink)',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, children);
}
function progressOf(p) {
  const d = p.steps.filter(s => s.done).length;
  return {
    done: d,
    total: p.steps.length
  };
}
function nextOf(p) {
  const s = p.steps.find(s => !s.done);
  return s ? s.label : null;
}
Object.assign(window, {
  nnKit,
  NN_PHOTO,
  ScreenHeader,
  SectionTitle,
  TextLink,
  progressOf,
  nextOf
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
window.NN_DATA = {
  me: {
    name: 'Mia Torres',
    color: 'blue'
  },
  friends: [{
    name: 'Mia Torres',
    color: 'blue',
    crafts: 'Crochet, knitting',
    active: 3
  }, {
    name: 'Jo Park',
    color: 'pear',
    crafts: 'Sewing',
    active: 2
  }, {
    name: 'Ana Lind',
    color: 'rose',
    crafts: 'Knitting, mending',
    active: 1
  }, {
    name: 'Sam Okafor',
    color: 'sienna',
    crafts: 'Sewing, crochet',
    active: 2
  }],
  projects: [{
    id: 'p1',
    title: 'Strawberry pals',
    craft: 'crochet',
    status: 'in-progress',
    backdrop: 'rose',
    photo: 'crochet-strawberry.png',
    owner: 0,
    steps: [{
      label: 'Pick the yarn',
      done: true
    }, {
      label: 'Magic ring and first rounds',
      done: true
    }, {
      label: 'Increase to 36 stitches',
      done: true
    }, {
      label: 'Work even for 8 rounds',
      done: true
    }, {
      label: 'Stuff and close the body',
      note: 'Do not overstuff, it pulls the stitches'
    }, {
      label: 'Leaves on top'
    }, {
      label: 'Embroider the seeds'
    }, {
      label: 'Add the hanging loop'
    }]
  }, {
    id: 'p2',
    title: 'Linen apron',
    craft: 'sewing',
    status: 'finished',
    backdrop: 'pear',
    owner: 1,
    steps: [{
      label: 'Wash the linen',
      done: true
    }, {
      label: 'Cut pattern pieces',
      done: true
    }, {
      label: 'Sew the pocket',
      done: true
    }, {
      label: 'Attach straps',
      done: true
    }, {
      label: 'Hem and press',
      done: true
    }]
  }, {
    id: 'p3',
    title: 'Pink practice swatch',
    craft: 'knitting',
    status: 'in-progress',
    backdrop: 'blue',
    photo: 'knit-swatch.jpg',
    owner: 2,
    steps: [{
      label: 'Cast on 20',
      done: true
    }, {
      label: 'Garter border',
      done: true
    }, {
      label: 'Stockinette 20 rows',
      done: true
    }, {
      label: 'Measure gauge'
    }, {
      label: 'Bind off'
    }]
  }, {
    id: 'p4',
    title: 'Daisy coaster set',
    craft: 'crochet',
    status: 'paused',
    backdrop: 'blue',
    photo: 'crochet-flower.png',
    owner: 3,
    steps: [{
      label: 'First daisy',
      done: true
    }, {
      label: 'Second daisy'
    }, {
      label: 'Third daisy'
    }, {
      label: 'Block them flat'
    }]
  }, {
    id: 'p5',
    title: 'Jeans knee patch',
    craft: 'mending',
    status: 'planning',
    backdrop: 'rose',
    owner: 0,
    steps: [{
      label: 'Find a patch fabric'
    }, {
      label: 'Pin from the inside'
    }, {
      label: 'Sashiko stitches'
    }]
  }, {
    id: 'p6',
    title: 'Cherry keyring',
    craft: 'crochet',
    status: 'in-progress',
    backdrop: 'pear',
    photo: 'crochet-cherries.png',
    owner: 1,
    steps: [{
      label: 'Two cherries',
      done: true
    }, {
      label: 'Stems'
    }, {
      label: 'Leaves'
    }]
  }],
  updates: [{
    author: 2,
    time: '2h ago',
    project: 'Pink practice swatch',
    photo: 'knit-swatch.jpg',
    backdrop: 'blue',
    note: 'Finally got my tension even. Gauge check tomorrow, wish me luck.',
    reactions: [{
      label: 'Love it',
      icon: 'heart',
      count: 3,
      active: true
    }, {
      label: 'Cheer',
      count: 1
    }]
  }, {
    author: 1,
    time: 'Yesterday',
    project: 'Linen apron',
    note: 'It is done! Already wore it twice while cooking.',
    backdrop: 'pear',
    reactions: [{
      label: 'Love it',
      icon: 'heart',
      count: 4
    }, {
      label: 'Cheer',
      count: 2,
      active: true
    }]
  }, {
    author: 3,
    time: 'Mon',
    project: 'Daisy coaster set',
    photo: 'crochet-flower.png',
    backdrop: 'rose',
    note: 'Taking a little break from these. One daisy so far and it makes me happy.',
    reactions: [{
      label: 'Love it',
      icon: 'heart',
      count: 2
    }, {
      label: 'Cheer',
      count: 3
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.UpdateCard = __ds_scope.UpdateCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DayPicker = __ds_scope.DayPicker;

__ds_ns.ListPanel = __ds_scope.ListPanel;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.StepChecklist = __ds_scope.StepChecklist;

__ds_ns.ILLUSTRATIONS = __ds_scope.ILLUSTRATIONS;

__ds_ns.CRAFTS = __ds_scope.CRAFTS;

__ds_ns.IllustratedIcon = __ds_scope.IllustratedIcon;

__ds_ns.Scallop = __ds_scope.Scallop;

__ds_ns.StickerShape = __ds_scope.StickerShape;

__ds_ns.Sticker = __ds_scope.Sticker;

})();
