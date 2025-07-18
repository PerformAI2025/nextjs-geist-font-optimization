(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/exercises.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "categories": (()=>categories),
    "exercises": (()=>exercises),
    "getExercisesByCategory": (()=>getExercisesByCategory),
    "getRandomExercises": (()=>getRandomExercises)
});
const exercises = [
    // Avec ballon
    {
        id: 'dribble-1',
        title: {
            fr: 'Dribbles en cône',
            en: 'Cone dribbling',
            nl: 'Kegel dribbelen'
        },
        description: {
            fr: 'Dribbler autour de 5 cônes en alternant pied droit et gauche',
            en: 'Dribble around 5 cones alternating right and left foot',
            nl: 'Dribbel rond 5 kegels afwisselend rechter- en linkervoet'
        },
        category: 'avec-ballon',
        duration: '10 min',
        difficulty: 'facile'
    },
    {
        id: 'passe-1',
        title: {
            fr: 'Passes courtes précises',
            en: 'Precise short passes',
            nl: 'Precieze korte passes'
        },
        description: {
            fr: 'Passes à 10m avec un partenaire, viser la précision',
            en: '10m passes with a partner, focus on accuracy',
            nl: '10m passes met een partner, focus op nauwkeurigheid'
        },
        category: 'avec-ballon',
        duration: '15 min',
        difficulty: 'facile'
    },
    {
        id: 'tir-1',
        title: {
            fr: 'Tirs au but variés',
            en: 'Varied shooting practice',
            nl: 'Gevarieerde schietoefening'
        },
        description: {
            fr: 'Tirs depuis différents angles et distances',
            en: 'Shots from different angles and distances',
            nl: 'Schoten vanuit verschillende hoeken en afstanden'
        },
        category: 'avec-ballon',
        duration: '20 min',
        difficulty: 'moyen'
    },
    {
        id: 'jonglage-1',
        title: {
            fr: 'Jonglage progressif',
            en: 'Progressive juggling',
            nl: 'Progressief jongleren'
        },
        description: {
            fr: 'Commencer par 10 touches, augmenter progressivement',
            en: 'Start with 10 touches, gradually increase',
            nl: 'Begin met 10 aanrakingen, geleidelijk verhogen'
        },
        category: 'avec-ballon',
        duration: '15 min',
        difficulty: 'moyen'
    },
    {
        id: 'controle-1',
        title: {
            fr: 'Contrôles orientés',
            en: 'Oriented ball control',
            nl: 'Georiënteerde balcontrole'
        },
        description: {
            fr: 'Réception et orientation du ballon en une touche',
            en: 'Ball reception and orientation in one touch',
            nl: 'Bal ontvangst en oriëntatie in één aanraking'
        },
        category: 'avec-ballon',
        duration: '12 min',
        difficulty: 'difficile'
    },
    // Sans ballon
    {
        id: 'renforcement-1',
        title: {
            fr: 'Squats et fentes',
            en: 'Squats and lunges',
            nl: 'Squats en uitvallen'
        },
        description: {
            fr: '3 séries de 15 squats et 10 fentes par jambe',
            en: '3 sets of 15 squats and 10 lunges per leg',
            nl: '3 sets van 15 squats en 10 uitvallen per been'
        },
        category: 'sans-ballon',
        duration: '15 min',
        difficulty: 'facile'
    },
    {
        id: 'mobilite-1',
        title: {
            fr: 'Étirements dynamiques',
            en: 'Dynamic stretching',
            nl: 'Dynamisch stretchen'
        },
        description: {
            fr: 'Mouvements articulaires pour préparer le corps',
            en: 'Joint movements to prepare the body',
            nl: 'Gewrichtsbewegingen om het lichaam voor te bereiden'
        },
        category: 'sans-ballon',
        duration: '10 min',
        difficulty: 'facile'
    },
    {
        id: 'equilibre-1',
        title: {
            fr: 'Équilibre sur une jambe',
            en: 'Single leg balance',
            nl: 'Balans op één been'
        },
        description: {
            fr: 'Tenir 30 secondes sur chaque jambe, yeux fermés',
            en: 'Hold for 30 seconds on each leg, eyes closed',
            nl: 'Houd 30 seconden vast op elk been, ogen dicht'
        },
        category: 'sans-ballon',
        duration: '8 min',
        difficulty: 'moyen'
    },
    {
        id: 'core-1',
        title: {
            fr: 'Gainage complet',
            en: 'Complete core workout',
            nl: 'Complete core training'
        },
        description: {
            fr: 'Planche, gainage latéral et abdominaux',
            en: 'Plank, side plank and abdominals',
            nl: 'Plank, zijplank en buikspieren'
        },
        category: 'sans-ballon',
        duration: '12 min',
        difficulty: 'moyen'
    },
    {
        id: 'proprioception-1',
        title: {
            fr: 'Proprioception avancée',
            en: 'Advanced proprioception',
            nl: 'Geavanceerde proprioceptie'
        },
        description: {
            fr: 'Exercices sur surface instable avec perturbations',
            en: 'Unstable surface exercises with perturbations',
            nl: 'Oefeningen op onstabiel oppervlak met verstoringen'
        },
        category: 'sans-ballon',
        duration: '15 min',
        difficulty: 'difficile'
    },
    // Physique
    {
        id: 'hiit-1',
        title: {
            fr: 'HIIT Football',
            en: 'Football HIIT',
            nl: 'Voetbal HIIT'
        },
        description: {
            fr: '30 sec effort intense, 30 sec récupération, 8 rounds',
            en: '30 sec intense effort, 30 sec recovery, 8 rounds',
            nl: '30 sec intense inspanning, 30 sec herstel, 8 rondes'
        },
        category: 'physique',
        duration: '16 min',
        difficulty: 'difficile'
    },
    {
        id: 'pliometrie-1',
        title: {
            fr: 'Sauts explosifs',
            en: 'Explosive jumps',
            nl: 'Explosieve sprongen'
        },
        description: {
            fr: 'Sauts verticaux, horizontaux et latéraux',
            en: 'Vertical, horizontal and lateral jumps',
            nl: 'Verticale, horizontale en laterale sprongen'
        },
        category: 'physique',
        duration: '12 min',
        difficulty: 'moyen'
    },
    {
        id: 'circuit-1',
        title: {
            fr: 'Circuit training',
            en: 'Circuit training',
            nl: 'Circuit training'
        },
        description: {
            fr: '6 stations de 45 sec avec 15 sec de repos',
            en: '6 stations of 45 sec with 15 sec rest',
            nl: '6 stations van 45 sec met 15 sec rust'
        },
        category: 'physique',
        duration: '18 min',
        difficulty: 'moyen'
    },
    {
        id: 'force-1',
        title: {
            fr: 'Renforcement fonctionnel',
            en: 'Functional strength',
            nl: 'Functionele kracht'
        },
        description: {
            fr: 'Exercices avec poids du corps adaptés au football',
            en: 'Bodyweight exercises adapted to football',
            nl: 'Lichaamsgewicht oefeningen aangepast aan voetbal'
        },
        category: 'physique',
        duration: '20 min',
        difficulty: 'moyen'
    },
    {
        id: 'vitesse-1',
        title: {
            fr: 'Vitesse et agilité',
            en: 'Speed and agility',
            nl: 'Snelheid en behendigheid'
        },
        description: {
            fr: 'Sprints courts avec changements de direction',
            en: 'Short sprints with direction changes',
            nl: 'Korte sprints met richtingsveranderingen'
        },
        category: 'physique',
        duration: '15 min',
        difficulty: 'difficile'
    },
    // Cardio
    {
        id: 'footing-1',
        title: {
            fr: 'Footing d\'endurance',
            en: 'Endurance running',
            nl: 'Uithoudingslopen'
        },
        description: {
            fr: 'Course à allure modérée pour développer l\'endurance',
            en: 'Moderate pace running to develop endurance',
            nl: 'Gematigd tempo lopen om uithoudingsvermogen te ontwikkelen'
        },
        category: 'cardio',
        duration: '30 min',
        difficulty: 'facile'
    },
    {
        id: 'intervalles-1',
        title: {
            fr: 'Intervalles courts',
            en: 'Short intervals',
            nl: 'Korte intervallen'
        },
        description: {
            fr: '8 x 200m à 85% avec 90 sec de récupération',
            en: '8 x 200m at 85% with 90 sec recovery',
            nl: '8 x 200m op 85% met 90 sec herstel'
        },
        category: 'cardio',
        duration: '25 min',
        difficulty: 'moyen'
    },
    {
        id: 'sprints-1',
        title: {
            fr: 'Sprints répétés',
            en: 'Repeated sprints',
            nl: 'Herhaalde sprints'
        },
        description: {
            fr: '6 x 30m sprint maximal avec 2 min de repos',
            en: '6 x 30m maximum sprint with 2 min rest',
            nl: '6 x 30m maximale sprint met 2 min rust'
        },
        category: 'cardio',
        duration: '20 min',
        difficulty: 'difficile'
    },
    {
        id: 'fartlek-1',
        title: {
            fr: 'Fartlek football',
            en: 'Football fartlek',
            nl: 'Voetbal fartlek'
        },
        description: {
            fr: 'Course avec variations de rythme spontanées',
            en: 'Running with spontaneous pace variations',
            nl: 'Lopen met spontane tempo variaties'
        },
        category: 'cardio',
        duration: '25 min',
        difficulty: 'moyen'
    },
    {
        id: 'tempo-1',
        title: {
            fr: 'Course tempo',
            en: 'Tempo run',
            nl: 'Tempo loop'
        },
        description: {
            fr: '20 min à allure soutenue mais contrôlée',
            en: '20 min at sustained but controlled pace',
            nl: '20 min op volgehouden maar gecontroleerd tempo'
        },
        category: 'cardio',
        duration: '20 min',
        difficulty: 'moyen'
    },
    // Technique/Tactique
    {
        id: 'placement-1',
        title: {
            fr: 'Positionnement défensif',
            en: 'Defensive positioning',
            nl: 'Defensieve positionering'
        },
        description: {
            fr: 'Travail des distances et angles de couverture',
            en: 'Work on distances and coverage angles',
            nl: 'Werk aan afstanden en dekkingshoeken'
        },
        category: 'technique-tactique',
        duration: '20 min',
        difficulty: 'moyen'
    },
    {
        id: 'jeu-equipe-1',
        title: {
            fr: 'Jeu à 3 contre 2',
            en: '3 vs 2 play',
            nl: '3 tegen 2 spel'
        },
        description: {
            fr: 'Situations de supériorité numérique',
            en: 'Numerical superiority situations',
            nl: 'Numerieke meerderheid situaties'
        },
        category: 'technique-tactique',
        duration: '15 min',
        difficulty: 'moyen'
    },
    {
        id: 'pressing-1',
        title: {
            fr: 'Pressing collectif',
            en: 'Collective pressing',
            nl: 'Collectieve pressing'
        },
        description: {
            fr: 'Coordination du pressing en équipe',
            en: 'Team pressing coordination',
            nl: 'Team pressing coördinatie'
        },
        category: 'technique-tactique',
        duration: '25 min',
        difficulty: 'difficile'
    },
    {
        id: 'transition-1',
        title: {
            fr: 'Transitions rapides',
            en: 'Quick transitions',
            nl: 'Snelle overgangen'
        },
        description: {
            fr: 'Passage défense-attaque en 3 touches max',
            en: 'Defense-attack transition in max 3 touches',
            nl: 'Verdediging-aanval overgang in max 3 aanrakingen'
        },
        category: 'technique-tactique',
        duration: '18 min',
        difficulty: 'difficile'
    },
    {
        id: 'schema-1',
        title: {
            fr: 'Schémas tactiques',
            en: 'Tactical patterns',
            nl: 'Tactische patronen'
        },
        description: {
            fr: 'Répétition de mouvements collectifs',
            en: 'Repetition of collective movements',
            nl: 'Herhaling van collectieve bewegingen'
        },
        category: 'technique-tactique',
        duration: '22 min',
        difficulty: 'moyen'
    }
];
const categories = {
    'avec-ballon': {
        fr: 'Avec ballon',
        en: 'With ball',
        nl: 'Met bal'
    },
    'sans-ballon': {
        fr: 'Sans ballon',
        en: 'Without ball',
        nl: 'Zonder bal'
    },
    'physique': {
        fr: 'Physique',
        en: 'Physical',
        nl: 'Fysiek'
    },
    'cardio': {
        fr: 'Cardio',
        en: 'Cardio',
        nl: 'Cardio'
    },
    'technique-tactique': {
        fr: 'Technique/Tactique',
        en: 'Technical/Tactical',
        nl: 'Techniek/Tactiek'
    }
};
function getExercisesByCategory(category) {
    return exercises.filter((exercise)=>exercise.category === category);
}
function getRandomExercises(count = 5) {
    const shuffled = [
        ...exercises
    ].sort(()=>0.5 - Math.random());
    return shuffled.slice(0, count);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/ai.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchMatchPreparation": (()=>fetchMatchPreparation),
    "fetchNutritionAdvice": (()=>fetchNutritionAdvice),
    "fetchPersonalizedPlan": (()=>fetchPersonalizedPlan),
    "fetchTrainingTip": (()=>fetchTrainingTip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function fetchPersonalizedPlan(prompt) {
    try {
        const apiKey = ("TURBOPACK compile-time value", "AIzaSyBMaH6Ci5e4TvsyGwnXatU9zK0r4Rt5iSU") || 'AIzaSyBMaH6Ci5e4TvsyGwnXatU9zK0r4Rt5iSU';
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': ("TURBOPACK compile-time truthy", 1) ? window.location.origin : ("TURBOPACK unreachable", undefined),
                'X-Title': 'Perform AI'
            },
            body: JSON.stringify({
                model: 'openai/gpt-4o',
                messages: [
                    {
                        role: 'system',
                        content: `Tu es un entraîneur de football professionnel spécialisé dans l'accompagnement des jeunes de 13-19 ans. 
            Tu donnes des conseils personnalisés sur l'entraînement, la nutrition et la préparation mentale. 
            Tes réponses sont motivantes, précises et adaptées à l'âge. 
            Tu utilises un ton encourageant et professionnel.
            Limite tes réponses à 150 mots maximum.`
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content.trim();
        } else {
            throw new Error('No response from AI');
        }
    } catch (error) {
        console.error('AI API Error:', error);
        return getFallbackAdvice();
    }
}
async function fetchNutritionAdvice(mealType) {
    const prompt = `Donne-moi un conseil nutritionnel pour un ${mealType} adapté à un jeune footballeur. 
  Inclus des aliments spécifiques et leurs bénéfices pour la performance sportive.`;
    return await fetchPersonalizedPlan(prompt);
}
async function fetchTrainingTip(exerciseType) {
    const prompt = `Donne-moi un conseil d'entraînement professionnel pour améliorer ${exerciseType} 
  chez un jeune footballeur. Inclus une astuce technique précise.`;
    return await fetchPersonalizedPlan(prompt);
}
async function fetchMatchPreparation(phase) {
    const prompt = phase === 'j-1' ? `Donne-moi 3 conseils essentiels pour bien préparer un match de football la veille (J-1). 
       Focus sur l'hydratation, l'alimentation et la préparation mentale.` : `Donne-moi 3 conseils pour le jour du match de football. 
       Focus sur l'échauffement, la concentration et la gestion du stress.`;
    return await fetchPersonalizedPlan(prompt);
}
function getFallbackAdvice() {
    const fallbackTips = [
        "Hydrate-toi régulièrement tout au long de la journée, pas seulement pendant l'entraînement.",
        "Concentre-toi sur la qualité de tes gestes plutôt que sur la quantité d'exercices.",
        "N'oublie pas de bien t'échauffer avant chaque séance pour éviter les blessures.",
        "La récupération est aussi importante que l'entraînement. Dors suffisamment !",
        "Visualise tes actions avant de les réaliser, cela améliore tes performances."
    ];
    return fallbackTips[Math.floor(Math.random() * fallbackTips.length)];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/daily-training/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DailyTrainingPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/exercises.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ai.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi'
];
const programs = [
    'Circuit Technique + Pasta Party Recipe',
    'Cardio Intense + Smoothie Protéiné',
    'Renforcement + Salade Énergétique',
    'Technique Ballon + Wrap Recovery',
    'HIIT + Bowl Antioxydant',
    'Tactique + Quinoa Power',
    'Récupération Active + Hydratation+'
];
function DailyTrainingPage() {
    _s();
    const [todayExercises, setTodayExercises] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nutritionTip, setNutritionTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [trainingTip, setTrainingTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('echauffement');
    const today = new Date();
    const dayName = days[today.getDay()];
    const todayProgram = programs[today.getDay()];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DailyTrainingPage.useEffect": ()=>{
            const loadDailyProgram = {
                "DailyTrainingPage.useEffect.loadDailyProgram": async ()=>{
                    setLoading(true);
                    // Get random exercises for today
                    const exercises = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$exercises$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomExercises"])(4);
                    setTodayExercises(exercises);
                    // Fetch AI recommendations
                    try {
                        const [nutrition, training] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNutritionAdvice"])('petit-déjeuner énergétique'),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchTrainingTip"])('technique de dribble')
                        ]);
                        setNutritionTip(nutrition);
                        setTrainingTip(training);
                    } catch (error) {
                        console.error('Error fetching AI tips:', error);
                    }
                    setLoading(false);
                }
            }["DailyTrainingPage.useEffect.loadDailyProgram"];
            loadDailyProgram();
        }
    }["DailyTrainingPage.useEffect"], []);
    const warmUpExercises = [
        {
            name: 'Course légère',
            duration: '5 min',
            description: 'Activation cardio-vasculaire'
        },
        {
            name: 'Étirements dynamiques',
            duration: '5 min',
            description: 'Préparation articulaire'
        },
        {
            name: 'Montées de genoux',
            duration: '2 min',
            description: 'Activation musculaire'
        }
    ];
    const coolDownExercises = [
        {
            name: 'Course de récupération',
            duration: '5 min',
            description: 'Retour au calme progressif'
        },
        {
            name: 'Étirements statiques',
            duration: '10 min',
            description: 'Relaxation musculaire'
        },
        {
            name: 'Respiration profonde',
            duration: '3 min',
            description: 'Récupération mentale'
        }
    ];
    const getDifficultyColor = (difficulty)=>{
        switch(difficulty){
            case 'facile':
                return 'bg-green-500';
            case 'moyen':
                return 'bg-yellow-500';
            case 'difficile':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "text-purple-300 hover:text-white mb-4",
                            onClick: ()=>window.history.back(),
                            children: "← Retour"
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "Entraînement Quotidien"
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-purple-500/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-white",
                                    children: [
                                        dayName,
                                        " : ",
                                        todayProgram
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/daily-training/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/daily-training/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mb-6",
                    children: [
                        {
                            key: 'echauffement',
                            label: 'Échauffement',
                            icon: '🔥'
                        },
                        {
                            key: 'exercices',
                            label: 'Exercices',
                            icon: '💪'
                        },
                        {
                            key: 'retour-calme',
                            label: 'Retour au calme',
                            icon: '🧘'
                        }
                    ].map((phase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: currentPhase === phase.key ? "default" : "outline",
                            className: `flex-1 ${currentPhase === phase.key ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-500/50 text-purple-300 hover:bg-purple-900/30'}`,
                            onClick: ()=>setCurrentPhase(phase.key),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2",
                                    children: phase.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                phase.label
                            ]
                        }, phase.key, true, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/daily-training/page.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                currentPhase === 'echauffement' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-6 bg-purple-900/20 border-purple-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🔥"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    " Échauffement (12 min)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/daily-training/page.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: warmUpExercises.map((exercise, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center p-3 bg-purple-800/20 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-medium",
                                                    children: exercise.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-purple-300 text-sm",
                                                    children: exercise.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "border-purple-400 text-purple-300",
                                            children: exercise.duration
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/daily-training/page.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this),
                currentPhase === 'exercices' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-purple-900/20 border-purple-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "💪"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/daily-training/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            " Exercices du jour"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-4",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/daily-training/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-300",
                                                children: "Génération du programme personnalisé..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/daily-training/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this) : todayExercises.map((exercise, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-purple-800/20 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-white font-medium",
                                                            children: exercise.title.fr
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "border-purple-400 text-purple-300",
                                                                    children: exercise.duration
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    className: `${getDifficultyColor(exercise.difficulty)} text-white`,
                                                                    children: exercise.difficulty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-purple-300 text-sm mb-2",
                                                    children: exercise.description.fr
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "bg-purple-700/30 text-purple-200",
                                                    children: exercise.category.replace('-', ' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, exercise.id, true, {
                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        trainingTip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🤖"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/daily-training/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 21
                                            }, this),
                                            " Conseil IA du jour"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-200",
                                        children: trainingTip
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/daily-training/page.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this),
                currentPhase === 'retour-calme' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-6 bg-purple-900/20 border-purple-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🧘"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this),
                                    " Retour au calme (18 min)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/daily-training/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: coolDownExercises.map((exercise, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center p-3 bg-purple-800/20 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-medium",
                                                    children: exercise.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-purple-300 text-sm",
                                                    children: exercise.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "border-purple-400 text-purple-300",
                                            children: exercise.duration
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/daily-training/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/daily-training/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/daily-training/page.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-gradient-to-r from-green-900/30 to-purple-900/30 border-green-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🥗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    " Nutrition du jour"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/daily-training/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-purple-700/30 rounded mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-purple-700/30 rounded w-3/4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/daily-training/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/daily-training/page.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-200",
                                children: nutritionTip
                            }, void 0, false, {
                                fileName: "[project]/src/app/daily-training/page.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/daily-training/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/daily-training/page.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/daily-training/page.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/daily-training/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(DailyTrainingPage, "gyPu5m9zefEn4A4N+TnSsFDtO+s=");
_c = DailyTrainingPage;
var _c;
__turbopack_context__.k.register(_c, "DailyTrainingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_271076c7._.js.map