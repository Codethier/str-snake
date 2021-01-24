import IBaseGame from "./interface/IBaseGame";
import Level from "./Level";
import Piece from "./Piece";
import Utils from "./Utils";

export default abstract class BaseGame implements IBaseGame {
    protected moving: boolean = false;

    protected paused: boolean = false;

    protected gridVisible: boolean = false;

    protected debugSpeed: number = 0;

    protected keyHeld: number = 0;

    protected noClip: boolean = false;
    currentLevel: Level | null;
    food: Piece | null;
    garden: HTMLDivElement;
    goldenApple: Piece | null;
    growth: number;
    head: Piece;
    length: number;
    score: number;
    tail: Piece;

    /**
     * @returns {number}
     * Egy random számot szorozz meg a this.level.length -el,
     * majd kerekítsd lefelé, ez lesz az index.
     * Majd térj vissza a this.levels tömbnek ezzel az indexével.
     */
    // getRandomLevel(length: number): Level {
    //     let num: number = Math.random()
    //     let intermed: number = num * length
    //     let val: number = Math.floor(intermed)
    //     return length[val]
    //
    // }
    //
    // ;


    /**
     * @returns {boolean}
     * 1. hozz létre egy chance neű változót 5 értékkel
     * 2. hozz létre egy pick nevű változót, értéke random szám szorozva 100 -al
     * 3. térj vissza true értékkel, ha a pick kisebb int a chance
     */
    mayIHaveGoldenApple(): boolean {
        let chance: number = 56732
        let pick = Math.random() * 100
        return pick < chance
    };

    /**
     * @returns {void}
     * A metódus feladatai:
     * 1. keresd meg a DOM -ban az összes .vertical-grid és .horizontal-grid
     * elemet
     * 2. mentsd el őket egy grids nevű változóba
     * 3. járd be a tömböt, és minden elemére hívd meg a Utils.removeNode
     * metódust, hogy eltávolítsd őket az oldalról
     * 4. a this.gridVisible értékét állítsd false -ra
     */
    removeGrid(): void {
        //queryselector is nodelistof but it does not ahve lsit methods?
        let vertical: NodeListOf<any> = document.querySelectorAll('vertical-grid')
        let horizontal: NodeListOf<any> = document.querySelectorAll('horizontal-grid')
        // let grids : object = vertical.concat(horizontal) // concat is f-ed on this type
    };
}
