async function cmd(command) {
    try {
        if (command === "MaxMultipliers") {
            const multiplierKeys = [
                "multiplyMinigamesSupernovaTab", "multiplier",
                "multiplyResroucesSupernovaTab", "multiplyLYSupernovaTab"
            ];
            
            for (const key of multiplierKeys) {
                await EditValueAsync(key, 999999999);
            }
            console.log("All multipliers maxed!");
        }
        else if (command === "CompleteAllMechs") {
            await EditValueAsync("totalEnemyShipsKilledCountEver", 999999999999999);
            await EditValueAsync("killsPerSecond", 999999.999);
            console.log("Enemy ships killed and KPS maxed!");
        }
        else if (command === "CompleteAllMechs2") {
            const enemiesKilledKeys = [
                "enemiesKilledOne", "enemiesKilledTwo", "enemiesKilledThree", "enemiesKilledFour",
                "enemiesKilledFive", "enemiesKilledSix", "enemiesKilledSeven", "enemiesKilledEight",
                "enemiesKilledNine", "enemiesKilledTen", "enemiesKilledEleven", "enemiesKilledTwelve",
                "enemiesKilledThirteen", "enemiesKilledFourteen", "enemiesKilledFifteen", "enemiesKilledSixteen",
                "enemiesKilledSeventeen", "enemiesKilledEighteen", "enemiesKilledNineteen", "enemiesKilledTwenty",
                "enemiesKilledTwentyOne", "enemiesKilledTwentyTwo", "enemiesKilledTwentyThree", "enemiesKilledTwentyFour",
                "enemiesKilledTwentyFive", "enemiesKilledTwentySix", "enemiesKilledTwentySeven", "enemiesKilledTwentyEight",
                "enemiesKilledTwentyNine", "enemiesKilledThirty", "enemiesKilledThirtyOne", "enemiesKilledThirtyTwo",
                "enemiesKilledThirtyThree", "enemiesKilledThirtyFour", "enemiesKilledThirtyFive", "enemiesKilledThirtySix",
                "enemiesKilledThirtySeven", "enemiesKilledThirtyEight", "enemiesKilledThirtyNine", "enemiesKilledFourty",
                "enemiesKilledFourtyOne", "enemiesKilledFourtyTwo", "enemiesKilledFourtyThree", "enemiesKilledFourtyFour",
                "enemiesKilledFourtyFive", "enemiesKilledFourtySix", "enemiesKilledFourtySeven", "enemiesKilledFourtyEight",
                "enemiesKilledFourtyNine", "enemiesKilledFifty", "enemiesKilledFiftyOne", "enemiesKilledFiftyTwo",
                "enemiesKilledFiftyThree", "enemiesKilledFiftyFour", "enemiesKilledFiftyFive", "enemiesKilledFiftySix",
                "enemiesKilledFiftySeven", "enemiesKilledFiftyEight", "enemiesKilledFiftyNine", "enemiesKilledSixty",
                "enemiesKilledSixtyOne", "enemiesKilledSixtyTwo", "enemiesKilledSixtyThree", "enemiesKilledSixtyFour",
                "enemiesKilledSixtyFive", "enemiesKilledSixtySix", "enemiesKilledSixtySeven", "enemiesKilledSixtyEight",
                "enemiesKilledSixtyNine", "enemiesKilledSeventy", "enemiesKilledSeventyOne", "enemiesKilledSeventyTwo",
                "enemiesKilledSeventyThree", "enemiesKilledSeventyFour", "enemiesKilledSeventyFive", "enemiesKilledSeventySix",
                "enemiesKilledSeventySeven", "enemiesKilledSeventyEight", "enemiesKilledSeventyNine", "enemiesKilledEighty"
            ];
    
            for (const key of enemiesKilledKeys) {
                await EditValueAsync(key, 999999999999999);
            }
    
            console.log("All enemiesKilled values have been updated to 999999999999999.");
        }
        else if (command === "UnlockEverything") {
            const unlockKeys = [
                "keepLevelsBlackMatter", "shockWaveShield", 
                "shockWaveAcquired", "tripleCosmicDustSupernovaTab",
                "enemyStunShotsDisabledSupernovaTab", "multiplyLYSupernovaTab",
                "multiplyResroucesSupernovaTab", "reduceCorrosiveDamageSupernovaTab"
            ];
            
            for (const key of unlockKeys) {
                await EditValueAsync(key, true);
            }
            console.log("unlocked!");
        }
        else if (command === "MaxTimeWarps") {
            const timeWarps = [
                "thirtyMinTimeSkipBlackMatter", "oneHTimeskipBlackMatter",
                "threeHTimeskipBlackMatter", "sixHTimeskipBlackMatter",
                "nineHTimeskipBlackMatter", "twelveHTimeskipBlackMatter"
            ];
            
            for (const key of timeWarps) {
                await EditValueAsync(key, 9999);
            }
            console.log("Time warps maxed!");
        }
        else if (command === "ActivateAllBuffs") {
            const buffKeys = [

                "canRefund", "timeSkipBlackMatter", "shockwaveCDHalved",
                "shieldPassiveCDHalved", "cloneShipCDHalved", "hpBuffActive",
                "damageBuffActive", "autoMineDamageBoost",
                "junkBuffActive", "plasmaBuffActive", "energyBuffActive",
                "expBuffActive", "garbageBuffActive", "prisonersBuffActive",
                "citizensBuffActive", "itemsDropRarityBlackMatter"
            ];
            
            for (const key of buffKeys) {
                await EditValueAsync(key, true);
            }
            console.log("All buffs activated!");
        }
        else if (command === "MaxExtraCosmicDustLevels") 
        {
            const Keys = [
                "extraCosmicDustResourcesMultiplier", "extraCosmicDustDmgHpMultiplier","extraCosmicDustMinigamesMultiplier",
                "extraCosmicDustItemsMultiplier", "extraCosmicDustCurrentRunLYMultiplier"];
    
            for (const key of Keys) {
                await EditValueAsync(key, 999999999999999999999999999999);
            }
        }
        else if (command === "MaxExtraArmyTabLevels") 
        {
            const Keys = [
                "junkExtraMultiplierArmyTab", "expExtraMultiplierArmyTab","plasmaExtraMultiplierArmyTab",
                "prisonersExtraMultiplierArmyTab", "garbageExtraMultiplierArmyTab", "dmgHpExtraMultiplierArmyTab", 
                "energyExtraMultiplierArmyTab", "citizensExtraMultiplierArmyTab", "scrapExtraMultiplierArmyTab", 
                "mineralsExtraMultiplierArmyTab", "radiationsExtraMultiplierArmyTab", "meteoriteExtraMultiplierArmyTab", 
                "lightYearsExtraMultiplierArmyTab" ];
        
            for (const key of Keys) {
                await EditValueAsync(key, 1999); // it crash if you put higher
            }
        }
        else if (command === "MaxMeteorite") 
        {
            const Keys = [
                "meteoriteCount", "totalMeteoriteCount", "mineralsCount", "totalMineralsCount" ];
        
            for (const key of Keys) {
                await EditValueAsync(key, 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
            }
        }
        else if (command === "MaxRadiations") 
        {
            const Keys = [
                "baseValueRadiations", "totalRadiationCount", "radiationCount"];
            
            for (const key of Keys) {
                await EditValueAsync(key, 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
            }
        }
        else if (command === "MaxLevels") 
        {
            const Keys = [
                "level", "skillPoints"];
                
            for (const key of Keys) {
                await EditValueAsync(key, 99999);
            }
        }
        else if (command === "DownloadUserData") 
        {
            function downloadUserDataAsFile(userData) {
                const blob = new Blob([userData], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'userData.txt';
                link.click();
            }
            
            window.ipcRenderer.invoke('list-user-data').then(userList => {
                const userIdentifiers = [null, null];
                userList.forEach(user => {
                    const index = parseInt(user.split(' ')[2]) - 1;
                    userIdentifiers[index] = user;
                });
            
                let allUserData = '';
            
                userIdentifiers.forEach(identifier => {
                    if (identifier) {
                        window.ipcRenderer.invoke('load-user-data', identifier).then(response => {
                            if (response) {
                                let userData = JSON.parse(response);
                                allUserData += `User Data for ${identifier}:\n` + JSON.stringify(userData, null, 2) + '\n\n';
                               
                                if (allUserData) {
                                    downloadUserDataAsFile(allUserData);
                                }
                            }
                        });
                    }
                });
            });
        }
        else {
            console.error(`Unknown command: ${command}`);
            console.log("Available commands: ");
        }
    } catch (error) {
        console.error(`Command failed: ${command}`, error);
    }
}
function EditValueAsync(valueName, newValue) {
    return new Promise(resolve => {
        EditValue(valueName, newValue);
        setTimeout(resolve, 2350);
    });
}
function EditValue(valueName, newValue) {
    const saveAndLogData = (userIdentifier, userData) => {
        const prettyData = JSON.stringify(userData, null, 2);
        console.log(`Updating ${userIdentifier}:\n${prettyData}`);
        
        window.ipcRenderer.invoke('save-user-data', userIdentifier, userData)
            .then(() => {
                console.log('************* PROTTO GAMES SAYS *************');
                console.log(`Data Saved for ${userIdentifier}`);
                console.log('************* PROTTO GAMES CYA! *************');
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };

    window.ipcRenderer.invoke('list-user-data').then(userList => {
        const userIdentifiers = [null, null];
        userList.forEach(user => {
            const index = parseInt(user.split(' ')[2]) - 1;
            userIdentifiers[index] = user;
        });

        userIdentifiers.forEach(identifier => {
            if (identifier) {
                window.ipcRenderer.invoke('load-user-data', identifier).then(response => {
                    if (response) {
                        let userData = JSON.parse(response);
                       
                        const contexts = [
                            { name: 'extraContext', obj: userData.extraContext },
                            { name: 'gameContext', obj: userData.gameContext },
                            { name: 'meteorContext', obj: userData.meteorContext }
                        ];

                        let updated = false;
                        contexts.forEach(context => {
                            if (context.obj && context.obj.hasOwnProperty(valueName)) {
                                context.obj[valueName] = newValue;
                                updated = true;
                                console.log(`Value '${valueName}' updated in ${context.name}`);
                            }
                        });

                        if (updated) {
                            saveAndLogData(identifier, userData);
                        }
                    }
                });
            }
        });
    });
}
function maxNumberString() {
    return '9'.repeat(308); // Maximum safe integer
}
// EditValue('someKey', 'new value')
// EditValue('someKey', 000000)
// cmd("MaxMultipliers");
// cmd("ActivateAllBuffs");
// cmd("CompleteAllMechs");
// cmd("MaxExtraCosmicDustLevels");
// cmd("MaxExtraArmyTabLevels");
// cmd("MaxMeteorite");
// cmd("MaxRadiations");
// cmd("MaxLevels");
// cmd("DownloadUserData");