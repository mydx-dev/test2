module.exports = {
    forbidden: [
        {
            name: "no-circular",
            severity: "error",
            from: {},
            to: { circular: true },
        },
        {
            name: "controller-only-to-usecase-shared-di",
            severity: "error",
            from: { path: "^src/backend/controllers" },
            to: { path: "^src/backend/(services|entities|tables|functions)" },
        },
        {
            name: "usecase-only-to-service-domain-shared",
            severity: "error",
            from: { path: "^src/backend/usecases" },
            to: { path: "^src/backend/(controllers|tables|functions|di)" },
        },
        {
            name: "service-only-to-domain-infra-shared",
            severity: "error",
            from: { path: "^src/backend/services" },
            to: { path: "^src/backend/(controllers|usecases|functions|di)" },
        },
        {
            name: "domain-no-backend-deps",
            severity: "error",
            from: { path: "^src/backend/entities" },
            to: {
                path: "^src/backend/(controllers|usecases|services|tables|di|functions)",
            },
        },
        {
            name: "infra-only-to-domain-shared",
            severity: "error",
            from: { path: "^src/backend/tables" },
            to: {
                path: "^src/backend/(controllers|usecases|services|di|functions)",
            },
        },
        {
            name: "functions-only-to-controller-di-shared",
            severity: "error",
            from: { path: "^src/backend/functions" },
            to: { path: "^src/backend/(services|entities|tables|usecases)" },
        },
        {
            name: "shared-no-backend-deps",
            severity: "error",
            from: { path: "^src/shared" },
            to: { path: "^src/backend" },
        },
    ],
    options: {
        doNotFollow: {
            path: "node_modules",
        },
        includeOnly: "^src",
        tsConfig: {
            fileName: "tsconfig.json",
        },
        enhancedResolveOptions: {
            extensions: [".ts", ".js"],
        },
    },
};
