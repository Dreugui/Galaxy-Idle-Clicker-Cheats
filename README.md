# Galaxy-Idle-Clicker-Cheats

this is a cheats for Galaxy Idle Clicker

---

## ⚠️ Disclaimer
This is a fork of the project of official-notfishvr here : https://github.com/official-notfishvr/Galaxy-Idle-Clicker-Cheats.

This game have an OnLine features ( leaderboard ). I advise to put a rule in your firewall to block access to internet to avoid any issue.

I did not modiffy the script, I just added a tutorial to use it more easily.

This script work as a save edit.

---

## 🛠️ Installation & Usage

### Step 1: Enable Remote Debugging
1. Open Steam, right-click **Galaxy Idle Clicker** in your library.
2. Select **Properties** > **General** > **Launch Options**.
3. Paste this command:
   ```bat
   GalaxyIdleClicker.exe --remote-allow-origins=* --remote-debugging-port=1234
   ```
4. Launch the game.

### Step 2: Access Debug Interface
1. Open Chrome/Firefox and visit:
   ```url
   http://localhost:1234
   ```
2. Click the **Galaxy Idle Clicker** debug target.

### Step 3: Execute Cheat Script
1. Normaly the devlopper tab is allready open on the right.
2. Navigate to the **Console** tab. ( if it isnt allready on it by default )
3. Paste the contents of [Edit User Data_cmd.js](https://raw.githubusercontent.com/Dreugui/Galaxy-Idle-Clicker-Cheats/refs/heads/main/Edit%20User%20Data_cmd.js) into the console.
4. Press `Enter` to execute.

---

## 🛠️ HOW TO USE

So, basicly this script works as a SAVE EDITOR ! it dosnt moddify the game runing. 

Meaning any commande will be effective only AFTER REBOOT OF THE GAME. and you NEED to quit the game WITHOUT SAVING. ( ALT+F4 / X of the window of the game)

1. run the game
2. go to the url [localhost:1234](http://localhost:1234)
3. past the script in the consol ( after allowing pasting ! ) You need to past the script each time you reboot the game and refresh the tab.
4. SAVE INGAME ( to not lose any progresse )
5. Use a command ( you can use multiple cmd quickly befor game auto save. I didnt find any way to post execute multiple command in a single time, so use them one by one else only the last one will work )
6. ALT+F4 / quit game without saving
7. reboot the game
8. now an error appear in the Tab Browser it's NORMAL, just go to the previus page and refresh (F5) then reclick on the link. if you do not refresh the error will stay.

---

## 🛠️ USEFULL INFORMATION

So, basicly this script allow you to see the save clearly, and the dev of the game have named it's variable in a strait forward way. so you can use any command to see the save log.

![image](https://github.com/user-attachments/assets/38c51aee-8232-4b22-bc25-7d194e4e5a95) 

click on copy and save it as a txt file anywhere you want. Like that you can search for any variable you would want to modify easily with Notepad++ ( or any text editor )

### Some usefull command

Change the time the game think you exited the game. 
I dont know if later in game you can have more but at start you can have bonus only for 1 day off so use [Milliseconds to Date](https://www.timecalculator.net/milliseconds-to-date) to get your base time.
then remove 86400000 with calculator. put the number result in your cmd.
  ```bat
EditValue("offlineTime", 1751600860242) 
   ```

Change the time the Light year started. 
same here use the date you want. ( get the date and remove days, the time is caped at like 5 days I think to get the x25 so get your days in milli then remove 86400000x5)
  ```bat
EditValue("startGameTime", 1751359438205)
   ```

Change the time the blackHole started. ( I dont know if it has any use)
  ```bat
EditValue("blackHoleTime", 1751359438205)
   ```

Change the number of meteorite destroyed.
  ```bat
EditValue("specialMeteoriteCount", {
      "diamond": 199990,
      "gold": 749990,
      "satellite": 19999,
      "amethyst": 49999
    })
   ```

Change the time of the Buff potion timer. (300 days. AGAIN ! you need to copy/pase each one individualy else it wont work.
CAREFULL I dont know what would happen if you use a potion you dont have unlock ! if you want the other potion just search in your TxT "potionTimer" and change the variable name in the cmd)
  ```bat
EditValue("damagePotionTimer", 25920000000)
EditValue("hpPotionTimer", 25920000000)
EditValue("junkPotionTimer", 25920000000)
EditValue("plasmaPotionTimer", 25920000000)
EditValue("garbagePotionTimer", 25920000000)
EditValue("expPotionTimer", 25920000000)
EditValue("prisonersPotionTimer", 25920000000)
EditValue("citizensPotionTimer", 25920000000)
EditValue("meteoritePotionTimer", 25920000000)
EditValue("mineralsPotionTimer", 25920000000)
   ```

---

## 🛠️ CONCLUSION

If you need to modify something else, just use the save txt to find the name and then change the variable with a cmd. normaly the variable is basicly the same name InGame so just search for that.
