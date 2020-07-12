const data = [
    {
        id: "app",
        icon: "iconsminds-shop",
        label: "menu.app",
        to: "/"
    },
    {
        id: "user",
        icon: "iconsminds-user",
        label: "menu.user",
        to: "/user",
        subs: [
            {
                icon: "simple-icon-user",
                label: "user.view",
                to: "/user"
            },

            /*
             * {
             *     icon: "simple-icon-user-follow",
             *     label: "user.create",
             *     to: "register"
             * },
             */
            {
                icon: "simple-icon-lock-open",
                label: "user.role",
                to: "/role"
            }
        ]
    },
    {
        id: "book",
        icon: "iconsminds-book",
        label: "menu.book",
        to: "/book",
        subs: [
            {
                icon: "simple-icon-book-open",
                label: "book.view",
                to: "/book"
            },
            {
                icon: "simple-icon-plus",
                label: "book.create",
                to: "/book/insert"
            },
            {
                icon: "simple-icon-grid",
                label: "book.category",
                to: "/category"
            },
            {
                icon: "simple-icon-eyeglass",
                label: "book.author",
                to: "/author"
            },
            {
                icon: "simple-icon-people",
                label: "book.publisher",
                to: "/publisher"
            }
        ]
    },
    {
        id: "loan",
        icon: "iconsminds-arrow-loop",
        label: "menu.loan",
        to: "/loan"
    },
    {
        id: "request",
        icon: "iconsminds-receipt-4",
        label: "menu.request",
        to: "/userRequest"
    },
    {
        id: "card",
        icon: "iconsminds-id-card",
        label: "menu.card",
        to: "/card"
    }
];
export default data;
