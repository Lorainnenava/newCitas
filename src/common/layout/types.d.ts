type SubModuleType = { name: string; path: string };

export type TDataModulesGetAll = {
    index: number;
    name: string;
    subModule: SubModuleType[];
};