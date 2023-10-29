function awaitpl() {
window.msgs.innerHTML="<h1 style=color:#87FF33>"+LoadedMSG+"</h1>";
}

function load_exploit(){
msgs.innerHTML="Loading Jailbreak... Please Wait !!!..";
setTimeout(poc, 1500);
}

function load_exploit_done(){
msgs.innerHTML="Jailbreak Loaded !!!";
}

function load_miraloader(){
var script = document.createElement('script');script.src = "mira.js";document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Payload Loading... Please Wait !!!";
LoadedMSG="Payload Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_mira(){
var script = document.createElement('script');script.src = "mira2.js";document.getElementsByTagName('head')[0].appendChild(script);
msgs.innerHTML="Loading Jailbreak + Mira Orbis... Please Wait !!!";
LoadedMSG="Mira Orbis Loaded... Press OK Now !!!";
exec_type = "payload";
setTimeout(poc,1500);
}

function load_goldhen222(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.2.2 ... Please Wait !!!";
LoadedMSG="GoldHEN v2.2.2 Loaded... Press OK Now !!!";
PLfile = "goldhen222.bin";
exec_type = "payload";
toogle_payload();
}

function load_goldhen23b2(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.3b2 ... Please Wait !!!";
LoadedMSG="GoldHEN v2.3b2 Loaded... Press OK Now !!!";
PLfile = "goldhen23b2.bin";
exec_type = "payload";
toogle_payload();
}

function load_goldhen24b14(){
msgs.innerHTML="Loading Jailbreak + GoldHEN v2.4b14 ... Please Wait !!!";
LoadedMSG="GoldHEN v2.4b14 Loaded... Press OK Now !!!";
PLfile = "goldhen24b14.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtaBeach146(){
msgs.innerHTML="Loading Jailbreak + GTA V Beach Mod v4.3 For Update 1.46... Please Wait !!!";
LoadedMSG="GTA V Beach Mod v4.3 For Update 1.46 Loaded... Press OK Now !!!";
PLfile = "GTAVBeach146v43.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtawildmodz138(){
msgs.innerHTML="Loading Jailbreak + GTA V WildeModz v1.38... Please Wait !!!";
LoadedMSG="GTA V WildeModz v1.38 Loaded... Press OK Now !!!";
PLfile = "wildemodz138.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtaexpulsion138(){
msgs.innerHTML="Loading Jailbreak + GTA V Expulsion v1.38... Please Wait !!!";
LoadedMSG="GTA V Expulsion v1.38 Loaded... Press OK Now !!!";
PLfile = "gtavexpulsion138.bin";
exec_type = "payload";
toogle_payload();
}

function load_gtalamance138v09(){
msgs.innerHTML="Loading Jailbreak + GTA V Lamance v1.38 ( Payload version 0.9 )... Please Wait !!!";
LoadedMSG="GTA V Lamance v1.38 ( Payload version 0.9 ) Loaded... Press OK Now !!!";
PLfile = "gtavlamance138v09.bin";
exec_type = "payload";
toogle_payload();
}

function load_rdr2129(){
msgs.innerHTML="Loading Red Dead Redemption II Mod V1.3.7 Beta for Update v1.29 ... Please Wait !!!";
LoadedMSG="Red Dead Redemption II Mod V1.3.7 Beta for Update v1.29 Loaded";
PLfile = "OystersMenu129.bin";
exec_type = "payload";
toogle_payload();
}

function load_gamedumper(){
msgs.innerHTML="Loading Jailbreak + Game Dumper... Please Wait !!!";
LoadedMSG="Game Dumper Loaded... Press OK Now !!!";
PLfile = "DumperG.bin";
exec_type = "payload";
toogle_payload();
}

function load_updatedumper(){
msgs.innerHTML="Loading Jailbreak + Update Dumper... Please Wait !!!";
LoadedMSG="Update Dumper Loaded... Press OK Now !!!";
PLfile = "DumperU.bin";
exec_type = "payload";
toogle_payload();
}

function load_mgu(){
msgs.innerHTML="Loading Jailbreak + MGU Dumper... Please Wait !!!";
LoadedMSG="MGU Dumper Loaded... Press OK Now !!!";
PLfile = "DumperMGU.bin";
exec_type = "payload";
toogle_payload();
}

function load_sgu(){
msgs.innerHTML="Loading Jailbreak + SGU Dumper... Please Wait !!!";
LoadedMSG="SGU Dumper Loaded... Press OK Now !!!";
PLfile = "DumperSGU.bin";
exec_type = "payload";
toogle_payload();
}

function load_pkgbackup(){
msgs.innerHTML="Loading Jailbreak + PKG Backup v1.1... Please Wait !!!";
LoadedMSG="PKG Backup Loaded... Press OK Now !!!";
PLfile = "ps4_pkg_backup11.bin";
exec_type = "payload";
toogle_payload();
}

function load_disableUpdates(){
msgs.innerHTML="Loading Jailbreak + Disable Updates... Please Wait !!!";
LoadedMSG="Disable Updates Loaded... Press OK Now !!!";
PLfile = "disableupdates.bin";
exec_type = "payload";
toogle_payload();
}
