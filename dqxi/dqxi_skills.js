let skills = {
    Swords: {
        DragonSlash: {
            name: "Dragon Slash",
            description: "", //placeholder
            effect: "Deals 2x damage to a single enemy if dragon-type, 1x damage otherwise.",
            formula: "DMG * 1.2 + 5",
            damageType: null, //placeholder
            target: "single",
            cost: "10P", 
            reqLevel: 0 //placeholder
        },

        FatalFlash: {
            name: "Fatal Flash",
            description: "",
            effect: "",
            formula: "",
            damageType: null,
            target: "",
            cost: "20P", 
            reqLevel: 0
        },
        
        FlameSlash: {
            name: "Flame Slash",
            description: "",
            effect: "",
            formula: "",
            damageType: null,
            target: "",
            cost: "3P", 
            reqLevel: 0
        },

        MetalSlash: {
            name: "Metal Slash",
            description: "",
            effect: "",
            formula: "",
            damageType: null,
            target: "",
            cost: "12P", 
            reqLevel: 0
        },

        MiracleSlash: {
            name: "Miracle Slash",
            description: "",
            effect: "",
            formula: "",
            damageType: null,
            target: "",
            cost: "16P", 
            reqLevel: 0
        },

        SwordStance: {
            name: "Sword Stance",
            description: "",
            effect: "",
            formula: "",
            damageType: null,
            target: "",
            cost: "7P", 
            reqLevel: 0
        },

        //passive skills
        "CounterWhenBlocking/Parrying": {

        },

        "DualDeadly": {

        },

        "Dual-Wielding": {

        },

        //stat boosts
        //attack power when wielding
        "AttackPowerWhenWielding+3": {

        },

        "AttackPowerWhenWielding+6": {

        },

        "AttackPowerWhenWielding+10": {

        },

        "AttackPowerWhenWielding+20": {

        },

        "AttackPowerWhenWielding+25": {
            
        },
        
        "AttackPowerWhenWielding+35": {

        },

        //critical hit chance when wielding
        "CriticalHitChanceWhenWielding+2%": {

        }
    },

    Greatswords: {
        //active skills
        CuttingEdge: {

        },

        FrostFangs: {

        },
        
        GreatswordGuard: {

        },

        Helichopter: {

        },

        UnbridledBlade: {

        },

        //passive skills
        "CounterWhenBlocking/Parrying": {

        },

        //stat boosts
        //attack power when wielding
        "AttackPowerWhenWielding+5": {

        },

        "AttackPowerWhenWielding+10": {

        },

        "AttackPowerWhenWielding+15": {

        },

        "AttackPowerWhenWielding+20": {

        },

        //parry chance when wielding
        "ParryChanceWhenWielding+4%": {

        },

        //critical hit chance when wielding
        "CriticalHitChanceWhenWielding+2%": {

        },

        "CriticalHitChanceWhenWielding+3%": {

        }
    },

    Knives: {
        //active skills
        "Assassin'sStab": {

        },

        CobraStrike: {

        },

        HPHoover: {

        },
        
        Persecutter: {

        },
        
        SleeperHit: {

        },
        
        Victimizer: {

        },
        
        //passive skills
        "Dual-Wielding": {

        },

        NastierKnives: {

        },
        
        //stat boosts
        //attack power when wielding
        "AttackPowerWhenWielding+5": {

        },

        "AttackPowerWhenWielding+10": {

        },

        "AttackPowerWhenWielding+30": {

        },
        
        //critical hit chance when wielding
        "CriticalHitChanceWhenWielding+2%+": {

        },

        "CriticalHitChanceWhenWielding+4%": {

        }
    },

    Boomerangs: {
        //active skills
        DoubleDown: {

        },

        OozerBruiser: {

        },

        PowerThrow: {

        },

        StarburstThrow: {

        },

        Toomerang: {

        },
        
        //passive skills
        //none
        
        //stat boosts
        //attack power when wielding
        "AttackPowerWhenWielding+10": {

        },

        //accuracy when wielding
        "AccuracyWhenWielding+5%": {

        },
        
        "AccuracyWhenWielding+10%": {

        }
    },

    Wands: {
        //active skills
        AlmaMatter: {

        },

        "Devil'sDelight": {

        },

        DivineIntervention: {

        },
        
        DivineRestitution: {

        },

        GraceoftheGoddess: {

        },

        "Snap,Crackle,Poof": {

        },
        
        //passive skills
        "Dual-Wielding": {

        },
        
        MinorMPRecoveryAfterBattle: {

        },

        ModerateMPRecoveryAfterBattle: {

        },
        
        //stat boosts
        //maximum mp when wielding
        "MaximumMPWhenWielding+30": {

        },

        //mp absorption when wielding
        "MPAbsorptionWhenWielding+2%": {

        },

        "MPAbsorptionWhenWielding+4%": {

        },
        
        //magical might when wielding
        "MagicalMightWhenWielding+10": {

        },

        //magical mending when wielding
        "MagicalMendingWhenWielding+10": {

        },

        "MagicalMendingWhenWielding+30": {

        },
    },

    HeavyWands: {
        //active skills

        
        //passive skills

        
        //stat boosts
    },

    Spears: {
        //active skills
        BeLikeWater: {

        },
        
        CattleProd: {

        },

        CounterWait: {

        },

        CrushedIce: {

        },
        
        Deliverance: {

        },

        Kaswooshle: {

        },

        LightningStorm: {

        },

        Multithrust: {

        },
        
        PartyPooper: {

        },

        ThunderThrust: {

        },

        //passive skills
        //none
        
        //stat boosts
        //attack power when wielding
        "AttackPowerWhenWielding+5": {

        },

        "AttackPowerWhenWielding+10": {

        },

        "AttackPowerWhenWielding+15": {

        },

        "AttackPowerWhenWielding+20": {

        },

        "AttackPowerWhenWielding+30": {

        },

        //parry chance when wielding
        "ParryChanceWhenWielding+4%": {

        },

        "ParryChanceWhenWielding+5%": {

        },

        //critical hit chance when wielding
        "CriticalHitChanceWhenWielding+2%": {

        },

        "CriticalHitChanceWhenWielding+4%": {

        }
    },

    Whips: {
        //active skills

        
        //passive skills

        
        //stat boosts
    },

    Claws: {
        //active skills

        
        //passive skills

        
        //stat boosts
    },

    Axes: {
        //active skills

        
        //passive skills

        
        //stat boosts
    },

    Shields: {
        //active skills

        
        //passive skills

        
        //stat boosts
    },

    Swordmastery: {
        //active skills

        
        //passive skills

        
        //stat boosts
    },

    Luminary: {
        Zap: {},
        Poof: {},
        HolyProtection: {},
        PepUp: {},
        Kaclang: {},
        Zapple: {},
        Kazap: {},
        FullHeal: {},
        Omniheal: {},
        BigBanga: {}
    },

    Guile: {

    },

    Vim: {

    },

    Harpistry: {
        DolefulDirge: {

        },
        
        HolierHymns: {

        },

        HolierHymns: {

        },

        HymnofAir: {

        },

        HymnofEarth: {

        },

        HymnofFire: {

        },

        HymnofIce: {

        },

        HymnofLight: {

        },

        HymnofThunder: {

        },
    },

    Litheness: {

    },

    Showmanship: {

    },

    Allure: {

    },

    Enlightenment: {

    },

    Heroism: {
        FalconSlash: {},
        "BlindMan'sBiff": {},
        DoubleUp: {},
        "Double-EdgedSlash": {},
        ACutAbove: {},
        GyrfalconSlash: {}
    },

    Chivalry: {

    },

    statBoosts: { //not tied to weapons
        //hp
        "MaximumHP+10": {

        },
        
        "MaximumHP+20": {

        },

        "MaximumHP+30": {

        },

        //mp
        "MaximumMP+10": {

        },

        "MaximumMP+20": {

        },

        "MaximumMP+30": {

        },

        //strength
        "Strength+5": {

        },

        "Strength+10": {

        },

        "Strength+15": {

        },

        "Strength+20": {

        },
        
        "Strength+25": {
            
        },

        //resillience
        "Resilience+10": {

        },

        "Resilience+20": {

        },

        //magical might
        "MagicalMight+5": {
            
        },

        "MagicalMight+10": {

        },
        
        "MagicalMight+50": {
            
        },

        //magical mending
        "MagicalMending+5": {

        },
        
        "MagicalMending+10": {

        },

        "MagicalMending+30": {

        },

        "MagicalMending+50": {

        },
        
        //agility
        "Agility+5": {

        },
        
        "Agility+10": {

        },

        "Agility+20": {

        },

        "Agility+30": {
            
        },

        //deftness
        "Deftness+10": {

        },

        "Deftness+20": {

        },

        "Deftness+30": {

        },

        //charm
        "Charm+10": {

        },

        "Charm+15": {

        },
        
        "Charm+20": {

        },

        "Charm+30": {

        },
        
        "Charm+40": {

        },

        //pep power
        "PepChance+5%": {

        },

        "PepChance+10%": {

        },

        "Pep-Up-Power-Up": {

        }

    }

} //close skills