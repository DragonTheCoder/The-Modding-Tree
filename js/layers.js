addLayer("fantasy", { //https://raw.githack.com/DragonTheCoder/The-Modding-Tree/master/index.html
    name: "fantasy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#AB09FB",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Imagination", // Name of prestige currency
    baseResource: "fantasy points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "I", description: "I: strenghten your imagination, with so called Imagination points", onPress(F){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades:{
        rows:2,
        cols:3,
        11:{
            title:"Drawing",
            description:"draw something, and you will become double as good at imagining things",
            cost: new Decimal(1),
            effect(){
                return player[this.layer].points.add(1).log(10).add(2);}
        },
        12:{
            title:"imagine things",
            description:"which mutiplies your fantasy gain by 2.5",
            cost: new Decimal(4),
        }
    }
})
