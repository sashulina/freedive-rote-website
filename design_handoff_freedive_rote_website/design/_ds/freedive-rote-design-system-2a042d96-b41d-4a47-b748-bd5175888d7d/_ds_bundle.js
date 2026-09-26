/* @ds-bundle: {"format":4,"namespace":"FreediveRoteDesignSystem_2a042d","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"CourseCard","sourcePath":"components/content/CourseCard.jsx"},{"name":"InfoList","sourcePath":"components/content/InfoList.jsx"},{"name":"PhotoCard","sourcePath":"components/content/PhotoCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"SplitFeature","sourcePath":"components/layout/SplitFeature.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"7ed3f084404a","components/content/CourseCard.jsx":"72477399cc66","components/content/InfoList.jsx":"fb47bae65a87","components/content/PhotoCard.jsx":"2e41ba28dbea","components/content/Quote.jsx":"43e984c0e849","components/core/Badge.jsx":"3a715b17064e","components/core/Button.jsx":"88b40a1e9c0f","components/core/Eyebrow.jsx":"1e903184f975","components/core/Icon.jsx":"2f67ff6ea7af","components/core/Logo.jsx":"633c5743fa0e","components/core/SectionHeading.jsx":"5727f594c619","components/forms/Checkbox.jsx":"51abf909ea4a","components/forms/Input.jsx":"835af714219a","components/forms/Select.jsx":"83f9c4afc753","components/forms/Textarea.jsx":"f4b090618ec1","components/layout/Hero.jsx":"fde4d736c3ca","components/layout/Section.jsx":"0b0c66713766","components/layout/SiteFooter.jsx":"ed0f2bccff26","components/layout/SiteHeader.jsx":"59a726dbe2b4","components/layout/SplitFeature.jsx":"01f535d8ff99","ui_kits/website/BookScreen.jsx":"4e8a365bb267","ui_kits/website/CoachingScreen.jsx":"7821b7207946","ui_kits/website/CoursesScreen.jsx":"e08190f8e16a","ui_kits/website/HomeScreen.jsx":"f82dc4351d29","ui_kits/website/LocationScreen.jsx":"9ef363115875","ui_kits/website/data.js":"4715b94c2b00"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FreediveRoteDesignSystem_2a042d = window.FreediveRoteDesignSystem_2a042d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FAQ / "what's included" disclosure list. Hairline rules only, no boxes.
   The marker is a thin plus that becomes a minus — quieter than a chevron. */
function Accordion({
  items = [],
  defaultOpen = -1,
  tone = 'light',
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const onDark = tone === 'dark';
  const line = onDark ? 'var(--border-on-dark)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid ' + line,
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: item.question,
      style: {
        borderBottom: '1px solid ' + line
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: 'var(--space-6) 0',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-light)',
        fontSize: 'var(--text-heading-3)',
        lineHeight: 1.35,
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
        minHeight: 'var(--tap-min)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.question), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'relative',
        width: '14px',
        height: '14px',
        flex: '0 0 auto',
        opacity: .72
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '6px',
        left: 0,
        width: '14px',
        height: '1px',
        background: 'currentColor'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 0,
        left: '6px',
        width: '1px',
        height: '14px',
        background: 'currentColor',
        transform: isOpen ? 'scaleY(0)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-tide)'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--duration-base) var(--ease-tide)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 0 var(--space-7, 28px) 0',
        maxWidth: 'var(--measure-text)',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--leading-body)',
        color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
      }
    }, item.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/InfoList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Label / value rows — course specs, session logistics, opening times.
   Hairline between rows; labels in sans, values in the display serif. */
function InfoList({
  items = [],
  tone = 'light',
  columns = 1,
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  const line = onDark ? 'var(--border-on-dark)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gap: '0 var(--space-12)',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      ...style
    }
  }, rest), items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid ' + line
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, item.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      textAlign: 'right',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-body-lg)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, item.value))));
}
Object.assign(__ds_scope, { InfoList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InfoList.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pull quote / student words. Newsreader light, generous leading, no quote-mark
   graphics — a short sand rule sits above instead. */
function Quote({
  children,
  attribution,
  role,
  tone = 'light',
  align = 'left',
  size = 'md',
  style = {},
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '48px',
      height: '1px',
      background: onDark ? 'var(--border-on-dark)' : 'var(--c-sand-deep)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extralight)',
      fontSize: size === 'lg' ? 'var(--text-display-2)' : 'var(--text-quote)',
      lineHeight: 'var(--leading-quote)',
      letterSpacing: 'var(--tracking-heading)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      maxWidth: '34ch',
      textWrap: 'pretty'
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, attribution, role ? ' · ' + role : '') : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  sand: {
    background: 'var(--surface-sand-strong)',
    color: 'var(--c-ink)',
    borderColor: 'transparent'
  },
  blue: {
    background: 'var(--surface-deep)',
    color: 'var(--text-on-dark)',
    borderColor: 'transparent'
  },
  aqua: {
    background: 'var(--c-aqua-wash)',
    color: 'var(--c-blue-deep)',
    borderColor: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'var(--border-hairline-strong)'
  },
  onPhoto: {
    background: 'rgba(11,51,72,.58)',
    color: 'var(--text-on-dark)',
    borderColor: 'rgba(255,255,255,.34)'
  }
};
function Badge({
  children,
  tone = 'sand',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      ...tones[tone],
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      backdropFilter: tone === 'onPhoto' ? 'var(--blur-glass)' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-regular)',
  letterSpacing: 'var(--tracking-button)',
  textTransform: 'uppercase',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-hover), transform var(--duration-base) var(--ease-tide)',
  minHeight: 'var(--tap-min)'
};
const sizes = {
  sm: {
    fontSize: '12px',
    padding: '10px 20px',
    minHeight: '38px'
  },
  md: {
    fontSize: '13px',
    padding: '14px 30px'
  },
  lg: {
    fontSize: '14px',
    padding: '18px 40px'
  }
};
const variants = {
  primary: {
    background: 'var(--surface-deep)',
    color: 'var(--text-on-dark)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'var(--border-hairline-strong)'
  },
  sand: {
    background: 'var(--surface-sand-strong)',
    color: 'var(--c-ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-link)',
    padding: '10px 2px',
    borderRadius: 'var(--radius-xs)'
  },
  onPhoto: {
    background: 'transparent',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--border-on-dark)'
  },
  onPhotoSolid: {
    background: 'var(--c-white)',
    color: 'var(--c-ink)'
  }
};
const hovers = {
  primary: {
    background: 'var(--c-blue-mid)'
  },
  secondary: {
    borderColor: 'var(--c-ink)',
    color: 'var(--c-ink)'
  },
  sand: {
    background: 'var(--c-sand-deep)'
  },
  ghost: {
    color: 'var(--text-link-hover)'
  },
  onPhoto: {
    background: 'rgba(255,255,255,.14)',
    borderColor: 'var(--c-white)'
  },
  onPhotoSolid: {
    background: 'var(--c-cream)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  trailingIcon,
  leadingIcon,
  type = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: 'translateY(1px)'
    } : null),
    ...(disabled ? {
      opacity: .42,
      cursor: 'not-allowed'
    } : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(variant === 'ghost' ? {
      borderBottom: '1px solid currentColor',
      borderRadius: 0
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CourseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A freediving course / level. White card on cream, hairline border, soft shadow
   on hover only — the photo does the work. */
function CourseCard({
  image,
  alt = '',
  level,
  title,
  summary,
  details = [],
  price,
  cta = 'Course details',
  href,
  onSelect,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: 'var(--border-hair)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-soft)' : 'var(--shadow-hairline)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'var(--transition-lift)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 2',
      overflow: 'hidden',
      background: 'var(--c-blue-wash)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(var(--image-zoom))' : 'none',
      transition: 'transform var(--duration-slow) var(--ease-tide)'
    }
  }), level ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      left: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "onPhoto"
  }, level)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-8) var(--space-8) var(--space-8)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-heading-2)',
      lineHeight: 'var(--leading-heading)',
      color: 'var(--text-heading)'
    }
  }, title), summary ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, summary) : null, details.length ? /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 'var(--space-2) 0 0',
      display: 'grid',
      gap: 0
    }
  }, details.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: '11px 0',
      borderTop: 'var(--border-hair)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      color: 'var(--text-muted)',
      letterSpacing: '0.04em'
    }
  }, d.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--text-heading)'
    }
  }, d.value)))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, price ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-3)',
      color: 'var(--text-heading)'
    }
  }, price) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    href: href,
    onClick: onSelect
  }, cta))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'muted',
  as = 'p',
  style = {},
  ...rest
}) {
  const Tag = as;
  const colors = {
    muted: 'var(--text-muted)',
    accent: 'var(--text-accent)',
    onDark: 'var(--text-on-dark-muted)',
    sand: 'var(--c-sand-deep)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      color: colors[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The "what we offer" card: a photograph first, a quiet caption second.
   layout="overlay" sets the type on the image behind a protection scrim. */
function PhotoCard({
  image,
  alt = '',
  eyebrow,
  title,
  description,
  meta,
  href,
  ratio = '4 / 5',
  layout = 'caption',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : onClick ? 'button' : 'div';
  const interactive = Boolean(href || onClick);
  const frame = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 'var(--radius-photo)',
    aspectRatio: ratio,
    background: 'var(--c-blue-wash)'
  };
  const img = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: hover && interactive ? 'scale(var(--image-zoom))' : 'none',
    transition: 'transform var(--duration-slow) var(--ease-tide)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      textAlign: 'left',
      textDecoration: 'none',
      border: 0,
      padding: 0,
      background: 'transparent',
      color: 'inherit',
      font: 'inherit',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: frame
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: img
  }), layout === 'overlay' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-6)',
      right: 'var(--space-6)',
      bottom: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "onDark"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-2)',
      lineHeight: 'var(--leading-heading)',
      color: 'var(--text-on-photo)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark)'
    }
  }, description) : null)) : null), layout === 'caption' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-heading-2)',
      lineHeight: 'var(--leading-heading)',
      color: hover && interactive ? 'var(--text-link)' : 'var(--text-heading)',
      transition: 'var(--transition-hover)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, description) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, meta) : null) : null);
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (CDN) is the icon set — no brand icon library was supplied.
   Pages must include:
   <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script> */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.25,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        root: ref.current
      });
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The supplied asset is a white lockup (mark + wordmark + "OCEAN PERFORMANCE").
   On light grounds it is tinted with a CSS mask so one file serves both. */
const SRC = 'assets/logo-freedive-rote-white.png';
function Logo({
  tone = 'light',
  variant = 'lockup',
  height = 64,
  assetBase = '',
  style = {},
  ...rest
}) {
  const src = (assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + SRC;
  const box = {
    height: height + 'px',
    width: 'auto',
    display: 'block',
    flex: '0 0 auto'
  };
  const crop = variant === 'wordmark' ? {
    WebkitMaskImage: 'linear-gradient(to bottom,transparent 0 58%,#000 58%)',
    maskImage: 'linear-gradient(to bottom,transparent 0 58%,#000 58%)'
  } : null;
  if (tone === 'light') {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "Freedive Rote \u2014 Ocean Performance",
      style: {
        ...box,
        ...crop,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": "Freedive Rote \u2014 Ocean Performance",
    style: {
      ...box,
      aspectRatio: '1599 / 977',
      background: tone === 'blue' ? 'var(--c-blue-deep)' : 'var(--c-ink)',
      WebkitMaskImage: 'url(' + src + ')',
      maskImage: 'url(' + src + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  level = 2,
  maxWidth = '22ch',
  style = {},
  ...rest
}) {
  const Tag = 'h' + level;
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onDark ? 'onDark' : 'muted'
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-light)',
      fontSize: level === 2 ? 'var(--text-display-2)' : 'var(--text-heading-1)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-heading)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      maxWidth,
      textWrap: 'pretty'
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-lede)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-loose)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  id,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      minHeight: 'var(--tap-min)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '1px',
      height: '1px'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      marginTop: '3px',
      width: '20px',
      height: '20px',
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--c-blue-deep)' : 'var(--border-sand)'),
      background: checked ? 'var(--surface-deep)' : 'var(--surface-input)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-hover)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '9px',
      height: '5px',
      borderLeft: '1.5px solid var(--c-white)',
      borderBottom: '1.5px solid var(--c-white)',
      transform: 'rotate(-45deg) translateY(-1px)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-heading)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  background: 'var(--surface-input)',
  color: 'var(--text-heading)',
  border: 'var(--border-sand-line)',
  borderRadius: 'var(--radius-sm)',
  padding: '14px 16px',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-body)',
  fontWeight: 'var(--weight-light)',
  minHeight: 'var(--tap-min)',
  transition: 'var(--transition-hover)'
};
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required ? ' *' : '') : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--c-blue-deep)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  id,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    required: required,
    style: {
      ...fieldBase,
      borderColor: error ? 'var(--c-blue-deep)' : undefined,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  required,
  id,
  options = [],
  placeholder,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    required: required,
    style: {
      width: '100%',
      appearance: 'none',
      background: 'var(--surface-input)',
      color: 'var(--text-heading)',
      border: 'var(--border-sand-line)',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 44px 14px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-light)',
      minHeight: 'var(--tap-min)',
      borderColor: error ? 'var(--c-blue-deep)' : undefined,
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '18px',
      top: '50%',
      width: '8px',
      height: '8px',
      borderRight: '1px solid var(--text-muted)',
      borderBottom: '1px solid var(--text-muted)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  required,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    required: required,
    style: {
      width: '100%',
      background: 'var(--surface-input)',
      color: 'var(--text-heading)',
      border: 'var(--border-sand-line)',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-body)',
      resize: 'vertical',
      borderColor: error ? 'var(--c-blue-deep)' : undefined,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Full-bleed photographic hero. Type sits low-left behind a bottom scrim so it
   clears 4.5:1 on any frame. height="tall" is the homepage; "short" is an
   interior page banner. */
function Hero({
  image,
  alt = '',
  eyebrow,
  title,
  lede,
  actions,
  height = 'tall',
  align = 'left',
  scrim = 'bottom',
  footer,
  style = {},
  ...rest
}) {
  const heights = {
    tall: 'min(92vh,880px)',
    medium: 'min(72vh,660px)',
    short: 'min(56vh,460px)'
  };
  const scrims = {
    bottom: 'var(--scrim-bottom)',
    full: 'var(--scrim-full)',
    side: 'var(--scrim-side)'
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      minHeight: heights[height],
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--surface-night)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: scrims[scrim]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--max-page)',
      marginInline: 'auto',
      padding: 'var(--space-16) var(--gutter) clamp(40px,6vw,80px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "onDark"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extralight)',
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-photo)',
      maxWidth: '18ch'
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-lede)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-on-dark)'
    }
  }, lede) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, actions) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      width: '100%'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const grounds = {
  shell: {
    background: 'var(--surface-page)'
  },
  white: {
    background: 'var(--surface-card)'
  },
  sand: {
    background: 'var(--surface-sand)'
  },
  sandStrong: {
    background: 'var(--surface-sand-strong)'
  },
  shallow: {
    background: 'var(--surface-shallow)'
  },
  deep: {
    background: 'var(--surface-deep)',
    color: 'var(--text-on-dark)'
  },
  night: {
    background: 'var(--surface-night)',
    color: 'var(--text-on-dark)'
  }
};

/* Page section: owns the vertical rhythm and the max-width container.
   Never more than two grounds on one page besides shell. */
function Section({
  children,
  ground = 'shell',
  width = 'page',
  size = 'md',
  id,
  style = {},
  innerStyle = {},
  ...rest
}) {
  const pad = {
    sm: 'clamp(48px,6vw,88px)',
    md: 'var(--space-section)',
    lg: 'clamp(112px,12vw,200px)',
    none: '0'
  }[size];
  const max = {
    page: 'var(--max-page)',
    content: 'var(--max-content)',
    narrow: 'var(--max-narrow)',
    full: 'none'
  }[width];
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    style: {
      paddingBlock: pad,
      ...grounds[ground],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: max,
      marginInline: 'auto',
      paddingInline: width === 'full' ? 0 : 'var(--gutter)',
      ...innerStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Ocean-night footer. Columns of quiet links, the white lockup, one line of
   place and a legal line. No newsletter shouting. */
function SiteFooter({
  columns = [],
  note,
  contact = [],
  onNavigate,
  assetBase = '',
  legal = '© Freedive Rote · Nemberala, Rote Ndao, Indonesia',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-night)',
      color: 'var(--text-on-dark)',
      paddingBlock: 'clamp(64px,7vw,104px) var(--space-10)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-page)',
      marginInline: 'auto',
      paddingInline: 'var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(48px,6vw,80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 'clamp(32px,4vw,64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "light",
    height: 78,
    assetBase: assetBase
  }), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '30ch',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-on-dark-muted)'
    }
  }, note) : null), columns.map(col => /*#__PURE__*/React.createElement("nav", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "onDark"
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.id ? '#' + l.id : l.href || '#',
    onClick: l.id && onNavigate ? e => {
      e.preventDefault();
      onNavigate(l.id);
    } : undefined,
    style: {
      border: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-muted)',
      transition: 'var(--transition-hover)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--c-white)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-on-dark-muted)';
    }
  }, l.label)))))), contact.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "onDark"
  }, "Find us"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-muted)'
    }
  }, contact.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, c)))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      letterSpacing: '0.04em',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", null, "Breath \xB7 Depth \xB7 Presence"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Site header. Transparent over the hero, then a warm glass bar once scrolled.
   Pass scrolled={true} for the solid state (the kit drives it from scroll). */
function SiteHeader({
  links = [],
  active,
  onNavigate,
  cta = 'Book a session',
  onCta,
  scrolled = false,
  assetBase = '',
  style = {},
  ...rest
}) {
  const solid = scrolled;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      width: '100%',
      background: solid ? 'var(--glass-light)' : 'transparent',
      backdropFilter: solid ? 'var(--blur-glass)' : 'none',
      borderBottom: solid ? 'var(--border-hair)' : '1px solid transparent',
      transition: 'background var(--duration-base) var(--ease-soft),border-color var(--duration-base) var(--ease-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-page)',
      marginInline: 'auto',
      minHeight: 'var(--header-height)',
      padding: 'var(--space-4) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      border: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: solid ? 'blue' : 'light',
    variant: "lockup",
    height: 46,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(16px,2.2vw,36px)'
    }
  }, links.map(l => {
    const isActive = active === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: '#' + l.id,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(l.id);
      },
      style: {
        border: 0,
        borderBottom: '1px solid ' + (isActive ? 'currentColor' : 'transparent'),
        paddingBottom: '3px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--weight-light)',
        letterSpacing: '0.04em',
        color: solid ? isActive ? 'var(--text-heading)' : 'var(--text-body)' : 'var(--text-on-dark)',
        opacity: solid || isActive ? 1 : .86,
        transition: 'var(--transition-hover)'
      }
    }, l.label);
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: solid ? 'primary' : 'onPhoto',
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/SplitFeature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Photograph on one side, text on the other. The workhorse content block.
   media="left" flips it; ratio keeps portrait photos portrait. */
function SplitFeature({
  image,
  alt = '',
  eyebrow,
  title,
  children,
  media = 'right',
  ratio = '4 / 5',
  tone = 'light',
  align = 'center',
  actions,
  ratioText = '1fr 1fr',
  style = {},
  ...rest
}) {
  const figure = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      aspectRatio: ratio,
      background: 'var(--c-blue-wash)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }));
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: eyebrow,
    title: title,
    tone: tone,
    maxWidth: "20ch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-loose)',
      color: tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, actions) : null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'clamp(32px,5vw,88px)',
      alignItems: align === 'center' ? 'center' : 'start',
      ...style
    }
  }, rest), media === 'left' ? figure : text, media === 'left' ? text : figure);
}
Object.assign(__ds_scope, { SplitFeature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SplitFeature.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookScreen.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeading,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  InfoList,
  Quote,
  Badge,
  Icon,
  Eyebrow
} = window.FreediveRoteDesignSystem_2a042d;
function BookScreen({
  go
}) {
  const D = window.FRData;
  const [sent, setSent] = React.useState(false);
  const [surf, setSurf] = React.useState(false);
  const [news, setNews] = React.useState(false);
  const [what, setWhat] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  function submit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError('We need something to call you.');
      return;
    }
    setError('');
    setSent(true);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    image: D.img + 'about-5.jpg',
    alt: "A surfer on a clean blue wall of water",
    height: "short",
    scrim: "side",
    eyebrow: "Visit",
    title: "Tell us when you are coming",
    lede: "No booking engine. You write, we reply within a day or two with what is free and what we would suggest."
  }), /*#__PURE__*/React.createElement(Section, {
    ground: "shell",
    width: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'clamp(36px,5vw,80px)',
      alignItems: 'start'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      background: 'var(--surface-card)',
      border: 'var(--border-hair)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(28px,4vw,48px)',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "aqua"
  }, "Enquiry sent"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Thank you", name ? ', ' + name.split(' ')[0] : '', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We read everything ourselves, so the reply comes from whoever will be teaching you. Usually within a day or two \u2014 longer if the swell is good."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('location'),
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Read about Rote"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Enquiry",
    title: "A few things about you"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "name",
    label: "Your name",
    placeholder: "Maya",
    value: name,
    error: error,
    onChange: e => setName(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    id: "what",
    label: "What interests you",
    placeholder: "Choose one",
    value: what,
    onChange: e => setWhat(e.target.value),
    options: ['Try freediving', 'Level 1 — Beginner', 'Level 2 — Advanced', 'Level 3 — Deep', 'Breathwork coaching', 'Guided ocean excursion']
  }), /*#__PURE__*/React.createElement(Input, {
    id: "when",
    label: "Roughly when",
    placeholder: "Early July",
    hint: "Season runs April \u2013 November."
  })), /*#__PURE__*/React.createElement(Textarea, {
    id: "goal",
    label: "What are you hoping to work on?",
    rows: 4,
    placeholder: "I surf and I panic when I get held under\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    id: "surf",
    label: "I surf",
    description: "We will shape the breathwork around hold-downs.",
    checked: surf,
    onChange: () => setSurf(!surf)
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "news",
    label: "Send me a note when dates open",
    checked: news,
    onChange: () => setNews(!news)
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send enquiry")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)',
      background: 'var(--surface-sand)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(28px,4vw,44px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Good to know"), /*#__PURE__*/React.createElement(InfoList, {
    items: [{
      label: 'Groups',
      value: 'Three at most'
    }, {
      label: 'Season',
      value: 'April – November'
    }, {
      label: 'Reply',
      value: 'Within 1–2 days'
    }, {
      label: 'Deposit',
      value: '25% to hold dates'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Find us"), [['map-pin', 'Nemberala, Rote Ndao, Indonesia'], ['mail', 'hello@freediverote.example'], ['instagram', '@freediverote']].map(([icon, text]) => /*#__PURE__*/React.createElement("span", {
    key: text,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-blue-deep)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), text))), /*#__PURE__*/React.createElement(Quote, {
    attribution: "Marta",
    role: "Level 2, 2026",
    size: "md"
  }, "I came to go deeper and left breathing differently on land.")))));
}
Object.assign(window, {
  BookScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CoachingScreen.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeading,
  SplitFeature,
  PhotoCard,
  InfoList,
  Accordion,
  Quote,
  Button,
  Icon,
  Eyebrow
} = window.FreediveRoteDesignSystem_2a042d;
const coachingSteps = [{
  n: '01',
  title: 'Sit down first',
  body: 'We start on the deck with CO₂ tolerance and a slow exhale. No water, no fins, no performance.'
}, {
  n: '02',
  title: 'Then the shallows',
  body: 'Breath-holds in waist-deep water, with someone watching you the whole time.'
}, {
  n: '03',
  title: 'Then the noise',
  body: 'Held-down drills in the surf zone for surfers: two-wave sets, without the panic.'
}, {
  n: '04',
  title: 'Then on your own',
  body: 'You leave with a practice you can keep doing at home, on land, in ten minutes a day.'
}];
function CoachingScreen({
  go
}) {
  const D = window.FRData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    image: D.img + 'coaching-detail.jpg',
    alt: "Two freedivers descending a line in blue water",
    height: "short",
    scrim: "full",
    eyebrow: "Coaching",
    title: "Breathwork for surfers and divers",
    lede: "Nervous-system training for people who get held under \u2014 and for anyone who wants a calmer breath on land."
  }), /*#__PURE__*/React.createElement(Section, {
    ground: "shell"
  }, /*#__PURE__*/React.createElement(SplitFeature, {
    image: D.img + 'surf-survival.jpg',
    alt: "A surfer riding a clean wave",
    ratio: "3 / 2",
    eyebrow: "Surf survival",
    title: "The wipeout is a breathing problem",
    media: "right",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('book')
    }, "Book a session")
  }, /*#__PURE__*/React.createElement("p", null, "Most surfers do not drown in a two-wave hold-down; they spend it fighting their own alarm. We train the response instead of the lung: slow exhale, soft jaw, no rush to the surface."), /*#__PURE__*/React.createElement("p", null, "Sessions are one-to-one or in pairs, ninety minutes, on the sand and then in the water."))), /*#__PURE__*/React.createElement(Section, {
    ground: "sand",
    width: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(36px,4vw,56px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How a session runs",
    title: "Four steps, in this order",
    maxWidth: "26ch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'clamp(24px,3vw,40px)'
    }
  }, coachingSteps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-sand)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, s.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 'var(--text-heading-3)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)'
    }
  }, s.body)))))), /*#__PURE__*/React.createElement(Section, {
    ground: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Meditation",
    title: "Stillness is part of the training, not an extra"
  }), /*#__PURE__*/React.createElement("p", null, "Every course and coaching block includes sitting practice \u2014 twenty minutes, twice a day, usually under the palms before the second water session. It is the same skill you use at thirty metres."), /*#__PURE__*/React.createElement(InfoList, {
    items: [{
      label: 'Session',
      value: '90 minutes'
    }, {
      label: 'Format',
      value: 'Solo or pairs'
    }, {
      label: 'Block',
      value: 'Six sessions'
    }, {
      label: 'Where',
      value: 'Deck, shallows, surf zone'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    layout: "overlay",
    ratio: "3 / 2",
    image: D.img + 'about-2.jpg',
    alt: "Students resting on the breathwork deck",
    eyebrow: "On land",
    title: "The breathwork deck"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    layout: "overlay",
    ratio: "3 / 2",
    image: D.img + 'about-4.jpg',
    alt: "Two freedivers on the descent line",
    eyebrow: "In the water",
    title: "Line sessions"
  })))), /*#__PURE__*/React.createElement(Section, {
    ground: "shell",
    width: "narrow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Practicalities",
    title: "Before your first session"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'Do I need to be a diver?',
      answer: 'No. Half the people who do this have never worn a mask. Surfers, swimmers and people who just breathe badly all come.'
    }, {
      question: 'Is it safe if I panic easily?',
      answer: 'That is the point of coming. Everything is in water you can stand up in until you decide otherwise.'
    }, {
      question: 'Can I do it alongside a course?',
      answer: 'Yes — the sessions sit on the mornings between water days.'
    }]
  }), /*#__PURE__*/React.createElement(Quote, {
    attribution: "Wira",
    role: "Surf coach, Nemberala"
  }, "Two sets held me down and I did not panic. That is the whole course, really."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('book'),
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Ask about coaching"))));
}
Object.assign(window, {
  CoachingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CoachingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CoursesScreen.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeading,
  CourseCard,
  Accordion,
  InfoList,
  Quote,
  Button,
  Badge
} = window.FreediveRoteDesignSystem_2a042d;
function CoursesScreen({
  go
}) {
  const D = window.FRData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    image: D.img + 'courses-card.jpg',
    alt: "Freedivers training on the line",
    height: "short",
    scrim: "full",
    eyebrow: "Courses",
    title: "Three levels, taught slowly",
    lede: "Certified freediving courses for three people at most, spread over unhurried days."
  }), /*#__PURE__*/React.createElement(Section, {
    ground: "shell",
    width: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(40px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it runs",
    title: "Two water sessions a day, and time on the sand between them",
    lede: "Mornings are for breath and depth while the water is glassy. Afternoons are for theory, breathwork and sitting still."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, D.levels.map(l => /*#__PURE__*/React.createElement(CourseCard, {
    key: l.id,
    image: D.img + l.image,
    alt: "",
    level: l.level,
    title: l.title,
    summary: l.summary,
    details: l.details,
    price: l.price,
    cta: "Enquire",
    onSelect: () => go('book')
  }))), /*#__PURE__*/React.createElement("p", {
    className: "fr-eyebrow",
    style: {
      margin: 0
    }
  }, "Prices are per person and include equipment"))), /*#__PURE__*/React.createElement(Section, {
    ground: "sand",
    width: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Included",
    title: "What comes with every course"
  }), /*#__PURE__*/React.createElement(InfoList, {
    items: D.included
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "shell",
    width: "narrow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Before you book",
    title: "Questions people ask"
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: D.faq,
    defaultOpen: 0
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "deep",
    width: "content",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    attribution: D.quotes[1].attribution,
    role: D.quotes[1].role
  }, D.quotes[1].text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onPhoto"
  }, "Three students at most"), /*#__PURE__*/React.createElement(Button, {
    variant: "onPhotoSolid",
    size: "lg",
    onClick: () => go('book')
  }, "Ask about dates")))));
}
Object.assign(window, {
  CoursesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CoursesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeading,
  SplitFeature,
  PhotoCard,
  CourseCard,
  Quote,
  InfoList,
  Button,
  Badge,
  Eyebrow,
  Icon
} = window.FreediveRoteDesignSystem_2a042d;
function HomeScreen({
  go
}) {
  const D = window.FRData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    image: D.img + 'hero-beach.jpg',
    alt: "A freediver walking out from the beach with a training buoy",
    eyebrow: "Nemberala \xB7 Rote Ndao, Indonesia",
    title: "Learn to breathe, then learn to go down",
    lede: "A small freediving and breathwork school on a white-sand beach in eastern Indonesia. Fifty steps from the door to waist-deep water.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "onPhotoSolid",
      size: "lg",
      onClick: () => go('book')
    }, "Book a session"), /*#__PURE__*/React.createElement(Button, {
      variant: "onPhoto",
      size: "lg",
      onClick: () => go('courses')
    }, "See the courses"))
  }), /*#__PURE__*/React.createElement(Section, {
    ground: "shell",
    width: "narrow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Freedive Rote"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extralight)',
      fontSize: 'var(--text-quote)',
      lineHeight: 1.45,
      color: 'var(--text-heading)',
      maxWidth: '40ch'
    }
  }, "Freediving, breathwork, surfing and meditation are not four things we teach. They are one practice \u2014 breath, attention, and a nervous system that stays calm when the water does not."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The school sits on the beach at Nemberala. Courses run in groups of three at most, and the day follows the water rather than a timetable."))), /*#__PURE__*/React.createElement(Section, {
    ground: "sand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(40px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we offer",
    title: "Four ways into the same practice",
    lede: "Start anywhere. Most people arrive for one and stay for another."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, D.offerings.map(o => /*#__PURE__*/React.createElement(PhotoCard, {
    key: o.title,
    image: D.img + o.image,
    alt: "",
    ratio: "4 / 5",
    eyebrow: o.eyebrow,
    title: o.title,
    description: o.description,
    meta: o.meta,
    onClick: () => go(o.id)
  }))))), /*#__PURE__*/React.createElement(Section, {
    ground: "shell"
  }, /*#__PURE__*/React.createElement(SplitFeature, {
    image: D.img + 'why-train-with-us.jpg',
    alt: "Palms and white sand at the school's beach",
    eyebrow: "Why train here",
    title: "The beach is the classroom",
    media: "right",
    ratio: "4 / 5",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('location')
    }, "About Rote")
  }, /*#__PURE__*/React.createElement("p", null, "No pool, no queue, no boat schedule to keep. We walk in from the sand, and the deep line is ten minutes away by boat when you are ready for it."), /*#__PURE__*/React.createElement(InfoList, {
    style: {
      marginTop: 'var(--space-4)'
    },
    items: [{
      label: 'Groups',
      value: 'Three students at most'
    }, {
      label: 'Season',
      value: 'April – November'
    }, {
      label: 'Teaching since',
      value: '2011'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "white"
  }, /*#__PURE__*/React.createElement(SplitFeature, {
    image: D.img + 'about-3.jpg',
    alt: "A freediver alongside the reef wall",
    eyebrow: "Who teaches",
    title: "Fifteen years of breath, depth and surf",
    media: "left",
    ratio: "4 / 5",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('coaching'),
      trailingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "How coaching works")
  }, /*#__PURE__*/React.createElement("p", null, "Our founder has been teaching breath and movement for over fifteen years \u2014 freediving instruction, surf coaching, and a long meditation practice that sits underneath both."), /*#__PURE__*/React.createElement("p", null, "That background is why the courses here spend as much time sitting still on the sand as they do on the line."))), /*#__PURE__*/React.createElement(Section, {
    ground: "deep",
    width: "content"
  }, /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    size: "lg",
    attribution: D.quotes[0].attribution,
    role: D.quotes[0].role
  }, D.quotes[0].text)), /*#__PURE__*/React.createElement(Section, {
    ground: "shell",
    width: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(32px,4vw,56px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The island",
    title: "Rote is the reason people stay",
    lede: "Reef flats you can wade into, a drop-off for depth days, and a coastline that rewards a slow week."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    layout: "overlay",
    ratio: "3 / 4",
    image: D.img + 'location-1.jpg',
    alt: "Jetty over clear shallow water",
    eyebrow: "Five minutes away",
    title: "The reef flat"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    layout: "overlay",
    ratio: "3 / 4",
    image: D.img + 'excursions-detail.jpg',
    alt: "Coral and fish on the reef",
    eyebrow: "Guided",
    title: "Ocean excursions"
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    layout: "overlay",
    ratio: "3 / 4",
    image: D.img + 'location-3.jpg',
    alt: "Shaded deck on the sand",
    eyebrow: "On land",
    title: "Breathwork deck"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => go('location')
  }, "More about the island"))), /*#__PURE__*/React.createElement(Section, {
    ground: "sandStrong",
    width: "content",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "April \u2013 November"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      maxWidth: '24ch'
    }
  }, "Tell us when you are coming and what you want to work on")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('book')
  }, "Book a session"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LocationScreen.jsx
try { (() => {
const {
  Hero,
  Section,
  SectionHeading,
  SplitFeature,
  PhotoCard,
  InfoList,
  Quote,
  Button,
  Icon,
  Eyebrow
} = window.FreediveRoteDesignSystem_2a042d;
function LocationScreen({
  go
}) {
  const D = window.FRData;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    image: D.img + 'location-1.jpg',
    alt: "Jetty over clear water with palms behind",
    height: "medium",
    eyebrow: "Rote Ndao, Indonesia",
    title: "An island at the bottom of Indonesia",
    lede: "Nemberala faces west into the Savu Sea: reef flat in front of the school, deep water ten minutes out, and the surf break around the point.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "onPhoto",
      onClick: () => go('book')
    }, "Plan a visit")
  }), /*#__PURE__*/React.createElement(Section, {
    ground: "shell"
  }, /*#__PURE__*/React.createElement(SplitFeature, {
    image: D.img + 'location-2.jpg',
    alt: "Shallow turquoise water off the beach",
    ratio: "3 / 2",
    eyebrow: "The water",
    title: "Flat inside the reef, blue beyond it",
    media: "left"
  }, /*#__PURE__*/React.createElement("p", null, "Inside the reef the water is waist-deep and glassy most mornings \u2014 the best classroom we could ask for. Outside it the bottom falls away quickly, which is why depth days need nothing more than a short boat ride."), /*#__PURE__*/React.createElement(InfoList, {
    items: D.logistics,
    style: {
      marginTop: 'var(--space-4)'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "sand",
    width: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(36px,4vw,56px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Guided ocean excursions",
    title: "Days out on the island",
    lede: "Half or full days by boat, shaped around the tide and what you want to see."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(PhotoCard, {
    ratio: "4 / 5",
    image: D.img + 'excursions-card.jpg',
    alt: "Guests on the boat heading out",
    eyebrow: "Half day",
    title: "Reef and drop-off",
    description: "Snorkel and breath-hold time over the coral shelf, with lunch on the boat.",
    meta: "4 hours",
    onClick: () => go('book')
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    ratio: "4 / 5",
    image: D.img + 'excursions-detail.jpg',
    alt: "Coral heads and reef fish",
    eyebrow: "Full day",
    title: "South coast",
    description: "Three stops along the quieter side of Rote, for people who want the whole day in the water.",
    meta: "8 hours",
    onClick: () => go('book')
  }), /*#__PURE__*/React.createElement(PhotoCard, {
    ratio: "4 / 5",
    image: D.img + 'about-1.jpg',
    alt: "Freedivers and sea life on a sandy bottom",
    eyebrow: "Sunrise",
    title: "Early swim",
    description: "First light on the reef flat, then coffee on the sand. No fins needed.",
    meta: "2 hours",
    onClick: () => go('book')
  })))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    width: "content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'clamp(32px,5vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 3,
    eyebrow: "Getting here",
    title: "It takes a day, and that is part of it"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['plane', 'Fly to Kupang (KOE) via Bali or Jakarta.'], ['waves', 'Then a 45-minute flight to Rote, or the morning fast ferry.'], ['map-pin', 'Nemberala is a 90-minute drive from Ba’a — we can arrange the pick-up.']].map(([icon, text]) => /*#__PURE__*/React.createElement("li", {
    key: text,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-blue-deep)',
      marginTop: '3px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, text))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Where to stay"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "There are simple bungalows and a couple of small guesthouses within walking distance of the school. Tell us your dates and we will point you at the right one \u2014 we do not take a commission."), /*#__PURE__*/React.createElement(Quote, {
    attribution: "Sofia",
    role: "Level 1, 2025",
    size: "md"
  }, "The journey out here already slows you down. By the time you are in the water you are halfway there.")))), /*#__PURE__*/React.createElement(Section, {
    ground: "night",
    width: "content",
    size: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: 'var(--text-on-dark)',
      maxWidth: '26ch'
    }
  }, "Come for a week. Most people wish they had booked two."), /*#__PURE__*/React.createElement(Button, {
    variant: "onPhotoSolid",
    size: "lg",
    onClick: () => go('book')
  }, "Check dates"))));
}
Object.assign(window, {
  LocationScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LocationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Copy and content for the Freedive Rote website kit.
   Prices and dates are PLACEHOLDERS — see README.md. */
window.FRData = {
  img: '../../assets/img/',
  nav: [{
    id: 'courses',
    label: 'Courses'
  }, {
    id: 'coaching',
    label: 'Coaching'
  }, {
    id: 'location',
    label: 'Rote'
  }, {
    id: 'book',
    label: 'Visit'
  }],
  offerings: [{
    id: 'courses',
    image: 'courses-card.jpg',
    eyebrow: 'Courses',
    title: 'Freediving courses',
    description: 'Level 1 to Level 3, taught over three or four unhurried days.',
    meta: '3–4 days'
  }, {
    id: 'coaching',
    image: 'coaching-card.jpg',
    eyebrow: 'Coaching',
    title: 'Breathwork coaching',
    description: 'Nervous-system work for surfers and anyone who gets held under.',
    meta: '90 minutes'
  }, {
    id: 'location',
    image: 'excursions-card.jpg',
    eyebrow: 'Excursions',
    title: 'Guided ocean days',
    description: 'Reef flats, drop-offs and quiet corners of the island, by boat.',
    meta: 'Half or full day'
  }, {
    id: 'book',
    image: 'try-freediving.jpg',
    eyebrow: 'First time',
    title: 'Try freediving',
    description: 'One morning in the shallows to find out how it feels.',
    meta: 'One morning'
  }],
  levels: [{
    id: 'level-1',
    image: 'level-1-beginner.jpg',
    level: 'Level 1',
    title: 'Beginner',
    summary: 'Your first breath-hold and your first depth, with nothing to prove.',
    details: [{
      label: 'Duration',
      value: '3 days'
    }, {
      label: 'Depth',
      value: 'to 12 m'
    }, {
      label: 'Group',
      value: 'max 3'
    }],
    price: 'IDR 4.8m'
  }, {
    id: 'level-2',
    image: 'level-2-advanced.jpg',
    level: 'Level 2',
    title: 'Advanced',
    summary: 'Longer holds, deeper lines, more time in the quiet part of the dive.',
    details: [{
      label: 'Duration',
      value: '4 days'
    }, {
      label: 'Depth',
      value: 'to 24 m'
    }, {
      label: 'Group',
      value: 'max 3'
    }],
    price: 'IDR 6.4m'
  }, {
    id: 'level-3',
    image: 'level-3-deep.jpg',
    level: 'Level 3',
    title: 'Deep',
    summary: 'Depth as a practice: mouthfill, free immersion, and a lot of stillness.',
    details: [{
      label: 'Duration',
      value: '5 days'
    }, {
      label: 'Depth',
      value: 'to 40 m'
    }, {
      label: 'Group',
      value: 'max 2'
    }],
    price: 'IDR 9.2m'
  }],
  included: [{
    label: 'Ratio',
    value: 'Three students, one instructor'
  }, {
    label: 'In the water',
    value: 'Two sessions a day'
  }, {
    label: 'On land',
    value: 'Breathwork and meditation'
  }, {
    label: 'Equipment',
    value: 'Long fins, mask, wetsuit'
  }, {
    label: 'Certification',
    value: 'Issued on completion'
  }],
  faq: [{
    question: 'Do I need experience?',
    answer: 'None. Most people arrive having never held their breath on purpose. We start on the sand, then in waist-deep water.'
  }, {
    question: 'How deep will I go?',
    answer: 'As deep as your body agrees to that day. Depth is a by-product of relaxation here, not a target we chase.'
  }, {
    question: 'Can I book a course and coaching together?',
    answer: 'Yes — most surfers do. The breathwork sessions sit on the mornings between water days.'
  }, {
    question: 'What is the water like?',
    answer: 'Warm, clear and usually flat inside the reef. The deep line is a ten-minute boat ride from the beach.'
  }, {
    question: 'When should I come?',
    answer: 'April to November is the settled season. July and August are the busiest, so book earlier.'
  }],
  logistics: [{
    label: 'Where',
    value: 'Nemberala, Rote Ndao'
  }, {
    label: 'Getting here',
    value: 'Kupang, then a 45-min flight or ferry'
  }, {
    label: 'Season',
    value: 'April – November'
  }, {
    label: 'Water',
    value: '27–29 °C, flat inside the reef'
  }],
  quotes: [{
    text: 'I came to go deeper and left breathing differently on land.',
    attribution: 'Marta',
    role: 'Level 2, 2026'
  }, {
    text: 'Two sets held me down and I did not panic. That is the whole course, really.',
    attribution: 'Wira',
    role: 'Surf coach, Nemberala'
  }],
  footer: {
    note: 'A small school on the beach at Nemberala, teaching breath, depth and presence.',
    columns: [{
      title: 'Learn',
      links: [{
        label: 'Freediving courses',
        id: 'courses'
      }, {
        label: 'Breathwork coaching',
        id: 'coaching'
      }, {
        label: 'Guided ocean days',
        id: 'location'
      }, {
        label: 'Try freediving',
        id: 'book'
      }]
    }, {
      title: 'School',
      links: [{
        label: 'Rote island',
        id: 'location'
      }, {
        label: 'Visit us',
        id: 'book'
      }, {
        label: 'Home',
        id: 'home'
      }]
    }],
    contact: ['Nemberala, Rote Ndao', 'Indonesia', 'hello@freediverote.example']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.InfoList = __ds_scope.InfoList;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.SplitFeature = __ds_scope.SplitFeature;

})();
