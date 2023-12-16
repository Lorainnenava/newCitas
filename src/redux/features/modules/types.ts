type SubModuleType = { name: string; path: string };

export interface ModulesState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        name: string;
        subModule: SubModuleType[];
    };
}
