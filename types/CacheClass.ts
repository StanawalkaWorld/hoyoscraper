
export class SSC<T> {
    _cacheTime: number;
    _updateFunction: (arg: void) => Promise<T>;
    
    _currentCache: T | undefined = undefined;
    _lastCache: number;

    constructor(cacheTime: number, updateFunction: (args: void) => Promise<T>) {
        this._cacheTime = cacheTime;
        this._updateFunction = updateFunction;
    }

    async validate(): Promise<T> {
        if(Date.now() > this._lastCache + this._cacheTime || this._currentCache === undefined) {
            this._currentCache = await this._updateFunction();
            this._lastCache = Date.now();
        }

        return new Promise<T>((resolve, reject) => {
            resolve(this._currentCache);
        })
        
    }
}

type DictKey = string | number;

export class KeyBasedCache<T> {
    _cacheTime: number;
    _updateFunction: (arg: DictKey) => Promise<T>;
    
    _currentCache: { [key: DictKey]: T };
    _lastCache: number;

    constructor(cacheTime: number, updateFunction: (args: DictKey) => Promise<T>) {
        this._cacheTime = cacheTime;
        this._updateFunction = updateFunction;
    }

    async validate(key: DictKey): Promise<T> {
        if(Date.now() > this._lastCache + this._cacheTime || this._currentCache === undefined) {
            this._currentCache[key] = await this._updateFunction(key);
            this._lastCache = Date.now();
        }

        return new Promise<T>((resolve, reject) => {
            resolve(this._currentCache[key]);
        })
        
    }
}