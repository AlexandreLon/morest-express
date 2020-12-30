declare function RouteMapping(method: string, path?: string): (Class: any, attribute: string) => void;
declare function GetMapping(path?: string): (Class: any, attribute: string) => void;
declare function PostMapping(path?: string): (Class: any, attribute: string) => void;
declare function PutMapping(path?: string): (Class: any, attribute: string) => void;
declare function PatchMapping(path?: string): (Class: any, attribute: string) => void;
declare function DeleteMapping(path?: string): (Class: any, attribute: string) => void;
export { RouteMapping, GetMapping, PutMapping, PostMapping, DeleteMapping, PatchMapping };
