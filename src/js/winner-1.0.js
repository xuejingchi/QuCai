/**
 * Created by Administrator on 2016/2/14.
 */

    //    判断包含数组
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

// 偶滴歌神获奖者1.0版本名单
var songwinners = new Array(111,222,333,444);

// 我是歌手获奖者1.0版本名单
var singerWinners = new Array("56b1b4490cf2c05778c4652d", "56b19de30cf222ea9d0a7810", "5618c2860cf2040c0242eedd", "56b2f2650cf2a8e8fb3b0267", "568728390cf2eaf8e9ffdda0", "56b2f5140cf2507b73e347fc", "56b2f68a0cf2507b73e34829", "56b2f83b0cf2507b73e34897", "56b2fdef0cf2507b73e3497b", "56b2fe890cf2a8e8fb3b0448", "56b300300cf2507b73e349d7", "56b2fe850cf29055eaa8cd98", "56b300b80cf2f49993aec36e", "56b3016a0cf29055eaa8cde1", "56160ca30cf26498ccfe1add", "56b306460cf29055eaa8cec6", "56b307e00cf2507b73e34b1c", "56b309ff0cf2507b73e34b80", "56b30a230cf2f49993aec6e3", "56b30ad30cf2507b73e34be0", "56b30b160cf2f49993aec767", "56b30b010cf2a8e8fb3b079d", "56b30c500cf2f49993aec7fc", "56b30ba80cf2a8e8fb3b07f7", "56b30af80cf29055eaa8cf9c", "56b30dd00cf2f49993aec8a3", "56b30edb0cf2f49993aec91d", "56b30dcf0cf29055eaa8d050", "56b307820cf2507b73e34b02", "56b2fd130cf2507b73e3495f", "56b312600cf2a8e8fb3b0bb6", "56b1ca080cf2a8e8fb3af8cb", "56b312cb0cf2f49993aecb46", "56b30c120cf2a8e8fb3b0833", "56b313c20cf2507b73e34eac", "56b314650cf29055eaa8d217", "56b315210cf2f49993aeccae", "56b30a240cf2a8e8fb3b0729", "56b3174d0cf29055eaa8d2bf", "56b318510cf2a8e8fb3b0dd8", "56b3190c0cf2507b73e35042", "56b319f90cf2f49993aece6f", "56b31b700cf2a8e8fb3b0e77", "56b31f110cf2f49993aecf74", "56b325af0cf2507b73e351fc", "56b3284c0cf2507b73e3524b", "56b32c2d0cf2f49993aed2be", "56b32d550cf29055eaa8d5e6", "56b32e360cf2a8e8fb3b117d", "56b32f5a0cf2507b73e352fe", "56b332860cf2f49993aed3a9", "56b33c3e0cf29055eaa8d736", "56b32f200cf2a8e8fb3b11a3", "56b313320cf29055eaa8d1af","56b1a9200cf2a31552b3a4d7", "56b1b4490cf2c05778c4652d", "56b2ef100cf2a8e8fb3b0233", "56b2f0290cf2a8e8fb3b0240", "56b2efd00cf2f49993aec064", "5618c2860cf2040c0242eedd", "56b2f30e0cf2507b73e347d9", "56b2f3fe0cf29055eaa8cc45", "56b1b03a0cf2233e23359b53", "56b2f6520cf2507b73e34813", "56b2f6b40cf2a8e8fb3b02bb", "56b2f6ba0cf2f49993aec0e1", "56b2f7bb0cf2507b73e3486c", "56b2f7470cf2507b73e34850", "56b2f7c10cf2a8e8fb3b02e2", "56b2f94a0cf2f49993aec160", "56b2f9890cf2f49993aec174", "56b2f9e20cf2f49993aec19a", "56b2fa010cf2a8e8fb3b0374", "56b2f9f60cf2a8e8fb3b036e", "56b2fa250cf29055eaa8cceb", "56b2fa270cf2f49993aec1b4", "56b2fa4a0cf2507b73e348e6", "56b2fb5d0cf2507b73e3491c", "56b2fcbb0cf2a8e8fb3b03f1", "56b2fcf00cf2f49993aec256", "56b2fd700cf2507b73e3496b", "56b2fdbd0cf2507b73e34973", "56b2fd120cf29055eaa8cd63", "56b2fdf60cf2f49993aec290", "56b2fe020cf2a8e8fb3b042c", "56b2fe6f0cf2a8e8fb3b0434", "56b2fe780cf2a8e8fb3b043a", "56b2fe7c0cf2a8e8fb3b0440", "56b2feb60cf2507b73e349a4", "56b2fe4b0cf2f49993aec2a0", "56b2fe840cf29055eaa8cd8c", "56b1c68a0cf2507b73e33fe1", "56b2fe850cf29055eaa8cd98", "56b2ff910cf2f49993aec2f7", "56b2fff80cf2507b73e349bf", "56b300140cf29055eaa8cdb0", "56b3004e0cf2f49993aec347", "56b300760cf2507b73e349df", "56b300c20cf2f49993aec374", "56b302100cf2f49993aec3c8", "56b3020f0cf2f49993aec3c2", "56b303460cf2a8e8fb3b054a", "56b303760cf2f49993aec467", "56160ca30cf26498ccfe1add", "56b303a70cf2a8e8fb3b056e", "56b303c30cf29055eaa8ce49", "56b3039a0cf29055eaa8ce37", "56b303e90cf2a8e8fb3b058a", "56b304f90cf2f49993aec506", "56b305d60cf2a8e8fb3b05fa", "56b306240cf2f49993aec55f", "56b306250cf2a8e8fb3b0620", "56b3074d0cf2a8e8fb3b0672", "56b304930cf2507b73e34ab4", "56b3096d0cf29055eaa8cf46", "56b309c20cf2a8e8fb3b0713", "56b30a560cf29055eaa8cf68", "56b30a240cf2a8e8fb3b0729", "56b309860cf29055eaa8cf4e", "56b309d60cf2f49993aec6bd", "56b30ae50cf2507b73e34be6", "56b30b030cf29055eaa8cfa8", "56b30bc80cf2a8e8fb3b080d", "56b30c0c0cf2a8e8fb3b0827", "56b30c100cf2a8e8fb3b082d", "561f155c0cf2f66bb08a362c", "56b30c990cf2507b73e34c8e", "566a8b7d0cf2e75d5aa3431c", "56b30a1a0cf2a8e8fb3b0723", "56b30be40cf29055eaa8cff0", "56b30d6c0cf2a8e8fb3b090a", "56b30d7a0cf2a8e8fb3b0920", "56b30d6c0cf2f49993aec868", "56b30dff0cf2f49993aec8be", "56b30e9d0cf29055eaa8d07a", "56b30f3e0cf2f49993aec95d", "56b30f640cf2a8e8fb3b09fc", "56b30f540cf2507b73e34d46", "56b30f5e0cf2a8e8fb3b09f6", "56b30f620cf2f49993aec987", "56b30f9c0cf2f49993aec9b5", "56b30fa80cf29055eaa8d0ce", "56b30d480cf2a8e8fb3b08ec", "56b3104f0cf2a8e8fb3b0a73", "56b310640cf29055eaa8d0ec", "56b30d0a0cf2f49993aec849", "56b310520cf2f49993aeca12", "56b310cf0cf2a8e8fb3b0acd", "56b30c700cf2507b73e34c80", "56b30cb50cf2f49993aec82d", "56b3117c0cf2a8e8fb3b0b29", "56b312070cf2a8e8fb3b0b71", "56b3123c0cf2f49993aecaec", "56b30ec50cf2507b73e34d20", "56b3122c0cf2f49993aecae4", "56b312cf0cf2f49993aecb52", "56b312ce0cf2f49993aecb4c", "56b312c30cf2507b73e34e58", "56b312c50cf2a8e8fb3b0bdb", "56b3135d0cf2507b73e34e74", "56b313800cf2f49993aecb97", "56b313d70cf2a8e8fb3b0c61", "56b314920cf2f49993aecc42", "56b3148c0cf2f49993aecc36", "56b314dd0cf2f49993aecc71", "56b314e00cf2f49993aecc86", "56b3144f0cf2a8e8fb3b0c9c", "56b315360cf2507b73e34f22", "56b314c10cf29055eaa8d246", "56b315bd0cf2a8e8fb3b0d01", "56b314a10cf29055eaa8d238", "56b316320cf2f49993aecd25", "56b316740cf2a8e8fb3b0d37", "56b316990cf2507b73e34f78", "56b316b50cf2f49993aecd4f", "56b316d00cf29055eaa8d291", "56b317f90cf2507b73e34fe6", "56b3180b0cf2f49993aecdfb", "56b317be0cf2f49993aecdda", "56b317300cf2a8e8fb3b0d74", "56b2feb50cf2507b73e349a1", "56b3186d0cf2f49993aece18", "56b3189f0cf29055eaa8d2ef", "56b318f30cf2a8e8fb3b0e0f", "56b319220cf29055eaa8d309", "56b31d130cf2f49993aecf02", "56b31d420cf2a8e8fb3b0eb9", "56b31d860cf2a8e8fb3b0ec7", "56b31e4b0cf2a8e8fb3b0eeb", "56b31e430cf2507b73e350db", "56b31ea60cf29055eaa8d3d5", "56b31ed30cf2a8e8fb3b0f17", "56b31ef90cf2507b73e350e9", "56b30dc60cf2f49993aec894", "56b31f300cf2a8e8fb3b0f27", "56b31f430cf2f49993aecf88", "56b31f4e0cf2507b73e350fd", "56b31f850cf2f49993aecf9e", "56b2f48c0cf2a8e8fb3b0280", "56b3201f0cf2f49993aecfe8", "56b30c250cf29055eaa8d00e", "56b1a8690cf2a31552b3a4ab", "56b320810cf2a8e8fb3b0f66", "56b31efb0cf2f49993aecf66", "56b320260cf2f49993aecff4", "56b30a320cf2a8e8fb3b072f", "56a324d20cf2e1d81371d630", "56b321630cf2f49993aed058", "5684dc130cf207c973117ce6", "56b3217b0cf2a8e8fb3b0f8e", "56b3219d0cf2f49993aed06c", "56b321e30cf2f49993aed08c", "5691be7b0cf235249bdaa333", "56b322390cf2f49993aed0a8", "56b322690cf2a8e8fb3b0fdc", "56b322660cf2507b73e351a2", "56b3232d0cf2507b73e351aa", "56b07c3f0cf222ea9d0a737f", "5684f9110cf207c973117d77", "5684eaf10cf208206a41eb62", "56b324b30cf2f49993aed12e", "56b325ec0cf2f49993aed168", "56b325e10cf2f49993aed15c", "56b3256f0cf29055eaa8d4e8", "56b326410cf2a8e8fb3b1056", "56b326710cf2a8e8fb3b105c", "5677c16a0cf2de31c5b24b9c", "56b1a2d60cf2233e23359459", "56b329200cf2507b73e35260", "56b329230cf29055eaa8d556", "56b318240cf2507b73e34ffa", "56b329cc0cf2a8e8fb3b10ed", "56b329fd0cf2a8e8fb3b1100", "56b32a2b0cf2f49993aed24e", "56b32a960cf2a8e8fb3b1111", "56b32ce30cf2a8e8fb3b1162", "56b309ff0cf2507b73e34b80", "56b32e150cf2f49993aed316", "56b32dd50cf2507b73e352db", "56b32f230cf2f49993aed339", "56b32fd30cf2a8e8fb3b11b5", "56b331100cf29055eaa8d64c", "56b317e60cf2507b73e34fda", "56b334c60cf2f49993aed3fe", "56b3363b0cf2507b73e35386", "56b336710cf2f49993aed43d", "56b3364e0cf2507b73e3538c", "56b338450cf2507b73e353ba", "56b338c20cf2f49993aed4a8", "56b339730cf2507b73e353dc", "56b33b6d0cf2a8e8fb3b12a9", "56b33c3d0cf2f49993aed4f1", "5615e7b10cf27f6b6029da2a", "5615e2350cf27f6b6029da19", "56680c250cf2e75d5aa33b97", "56b33f140cf2f49993aed542", "568a4d7a0cf243cf1ec085a4", "564adba50cf2aa63556d602b", "56b33feb0cf29055eaa8d75c", "56b340a40cf2507b73e3543f", "56b3454b0cf29055eaa8d779", "56b314de0cf2507b73e34ef0", "56b3086a0cf2f49993aec61b", "56b346500cf2507b73e3547f", "56b346540cf2507b73e35485", "56b34c290cf2a8e8fb3b14cf", "56b34c450cf2a8e8fb3b14d5", "56b354470cf2f49993aed684", "56b3564a0cf2f49993aed69f", "56b197cd0cf29fc0faccb336", "56b356860cf2507b73e354f0", "56b357ee0cf2507b73e3550d", "56b317840cf2a8e8fb3b0d99", "56b359260cf2f49993aed6ca", "56b359bd0cf2507b73e35532", "56b35ec10cf2a8e8fb3b1584", "56b365650cf2a8e8fb3b160c", "56b367f60cf2f49993aed73a", "5648233b0cf2aada2572e4e0", "56b1a5f00cf29fc0faccb4ed", "56b1ca080cf2a8e8fb3af8cb", "56af8ae50cf2233e23358b60", "56b38a790cf2507b73e3565a", "56b324420cf2507b73e351ca", "56b3f8dd0cf2f49993aed919", "5667b2e00cf21f9cc622710c", "56b3245d0cf2f49993aed116", "5688641b0cf2eaf8e9ffe5db", "56b312070cf2f49993aecad8", "56161a4e0cf26498ccfe1b47", "56b4cf4b0cf2507b73e35840", "56b5495b0cf2507b73e35883", "5618c2860cf2040c0242eedd", "56b1967a0cf29fc0faccb318", "56b199220cf222ea9d0a7776", "56b19c8c0cf2a31552b3a1d6", "56b19dd10cf222ea9d0a780a", "56b19de30cf222ea9d0a7810", "56b19ed60cf222ea9d0a784d", "56b1a2340cf2233e23359427", "56b1a1a40cf222ea9d0a78ca", "56b1a4a10cf29fc0faccb4ad", "56b19c4f0cf2233e233592be", "56b1a7a30cf222ea9d0a7aaa", "56b1a90e0cf2a31552b3a4d1", "56b1aa420cf2233e233597e3", "56b1a9200cf2a31552b3a4d7", "56b1ac0b0cf2a31552b3a5db", "56b1abf10cf2a31552b3a5bd", "56b1aeab0cf2233e23359a2c", "56b1af0e0cf222ea9d0a7d67", "56b1a7f80cf29fc0faccb576", "56b1b0720cf2233e23359b7e", "56b1b2440cf2c05778c4642e", "56b1af610cf2233e23359ae0", "56b1b43e0cf2dae88bbfb157", "56b1b4760cf207802eff8154", "56b1b8450cf2c05778c4668c", "56b1b8120cf207802eff81f0", "56b1b8d30cf21c17b804c536", "56b1b97b0cf2dae88bbfb280", "56b1b9720cf2dae88bbfb27a", "56b1ae8f0cf2233e23359a18", "56b1a6320cf29fc0faccb516", "56b1befc0cf2a8e8fb3af7e3", "56b1b4e00cf2dae88bbfb163", "568610550cf243cf1ec07423", "56b1c9ad0cf2a8e8fb3af8bd", "56b1c9bb0cf29055eaa8c62e", "56b1c0ca0cf2a8e8fb3af815", "56b1d40b0cf2a8e8fb3af9c2", "56b1d4480cf2507b73e34089", "56b1d48f0cf2a8e8fb3af9d4", "56b1d4b10cf2f49993aeb635", "56b1d7040cf2507b73e340e7", "56b1d7580cf2a8e8fb3afa4c", "56b1de240cf2a8e8fb3afaf7", "56b1df1f0cf2507b73e341b9", "5684dc130cf207c973117ce6", "56b1ebb60cf2a8e8fb3afbb2", "56b1befc0cf2f49993aeb36d", "56b1a4da0cf2a31552b3a38e", "56b1f8860cf2f49993aeb973", "56b1ab1f0cf2a31552b3a565", "56b1a0d00cf222ea9d0a789c", "56b1b6c30cf207802eff81b8", "56b1a60d0cf2a31552b3a3f2", "56b1a2e50cf2a31552b3a307", "56b1aea90cf222ea9d0a7d1c", "56b1b5660cf2dae88bbfb199", "56b1ad4a0cf2233e23359947", "56b19a5c0cf2233e2335924c", "56b1b5620cf2c05778c465a4", "56b1b2160cf21c17b804c3e3", "56b199940cf2a31552b3a193", "56b1a4480cf222ea9d0a79a6", "56b1a8810cf2233e2335971f", "56b1f7400cf2f49993aeb968", "56b1cf9c0cf2507b73e34045", "56b1b3ce0cf2c05778c46500", "56b1a6870cf222ea9d0a7a4e", "56b1af610cf2233e23359ae0", "56b1aec70cf2233e23359a4b", "56b1b04b0cf2233e23359b5f", "56b1be180cf29055eaa8c558", "56b1d94a0cf29055eaa8c745", "568610550cf243cf1ec07423", "56b1a7620cf2233e23359693", "56b171180cf2233e2335910a", "56b2fac40cf2f49993aec1d6", "56b199710cf222ea9d0a7788", "56b19eab0cf2a31552b3a218", "56b1c4ae0cf2f49993aeb41a", "56b1adaf0cf222ea9d0a7cbe", "56b30c1d0cf29055eaa8cffe", "56b1a30a0cf2233e2335946b", "56b1af900cf2233e23359af0", "56b1d4240cf2a8e8fb3af9ca", "56b1ab330cf29fc0faccb655", "56b1b2fe0cf2c05778c46497", "56b1ad7c0cf222ea9d0a7cb0", "56b216aa0cf29055eaa8c9d1", "56b1b1630cf207802eff80f1", "56b1fee90cf29055eaa8c94c", "56b1d77a0cf2507b73e34101", "56b1a5b00cf29fc0faccb4e1", "56b1acc70cf2233e233598ec", "56b3022f0cf2507b73e34a15", "56b1afd70cf29fc0faccb719", "56b1c2df0cf2f49993aeb3f8", "56b1a3d70cf2233e233594d1", "56b1aabe0cf2233e23359838", "56b196ca0cf2233e233591ad", "56b1ade20cf29fc0faccb6be", "56b1bbfc0cf29055eaa8c51c", "56b2b5a60cf2f49993aebe98", "56b1a22c0cf222ea9d0a78fb", "56b1c15c0cf29055eaa8c5a4", "56b1c72d0cf2f49993aeb455", "56b1962d0cf2233e233591a7", "56b1b2020cf21c17b804c3db", "56b1d5250cf2507b73e340b3", "56b197a90cf2233e233591ef", "56b1bbea0cf2a8e8fb3af756", "56b1b9fd0cf2c05778c46714", "56b2128c0cf2a8e8fb3afe53", "56b1b4130cf2dae88bbfb137", "56b1c36e0cf2507b73e33f99", "56b1a5610cf2233e233595b7", "56b1a7230cf2233e2335967d", "56b1ca5f0cf29055eaa8c636", "5615e7b10cf27f6b6029da2a", "56b1a6b30cf2a31552b3a439", "56b1a5cd0cf2233e233595fd", "56b1bf4b0cf2a8e8fb3af7f1", "56b211ad0cf2a8e8fb3afe3f", "56b1d7670cf29055eaa8c700", "56b41db20cf2507b73e3571f", "56b1a17f0cf2233e233593f7", "56b1a1030cf2a31552b3a25e", "56b1d3930cf2a8e8fb3af9b4", "56b1a2970cf222ea9d0a791a", "56b1aec50cf222ea9d0a7d29", "56680c250cf2e75d5aa33b97", "56b309860cf29055eaa8cf4e", "56b1e8bd0cf2507b73e34221", "56b1db420cf2a8e8fb3afab4", "56b1a9690cf29fc0faccb5c1", "56b227390cf2f49993aeba97", "56b1fe550cf2f49993aeb991", "56b3284c0cf2507b73e3524b", "56b3093a0cf29055eaa8cf3a", "56b302100cf2f49993aec3c8", "56b1ac960cf222ea9d0a7c45", "56b1d0940cf2a8e8fb3af96f", "56b1a4380cf222ea9d0a799a", "56b1b4cb0cf207802eff8179", "56b1b5980cf2dae88bbfb19f", "56b1a45a0cf2233e23359538", "56b1a4a10cf29fc0faccb4ad", "56b1b5e70cf21c17b804c47a", "56b1a9ad0cf2233e2335979b", "568c84010cf2eaf8ea000394", "56b1a1660cf2a31552b3a27c", "56b1b14c0cf2233e23359bc8", "56b30a1a0cf2a8e8fb3b0723", "56b1b56c0cf2c05778c465aa", "56b1b4580cf2c05778c46533", "56b1afb00cf2233e23359b00", "56b19c530cf29fc0faccb397", "56b1e5aa0cf2f49993aeb88c", "56161a4e0cf26498ccfe1b47", "56b30e600cf2f49993aec8ef", "56b1a5ae0cf222ea9d0a7a04", "56b1c68a0cf2507b73e33fe1", "56b1af640cf2233e23359ae6", "56b1c6460cf2507b73e33fc9", "56b2ec770cf2f49993aec049", "56b22ef70cf29055eaa8ca32", "56b1a8c30cf2233e2335972b", "56b1ccf70cf2f49993aeb54b", "56b1b3d20cf21c17b804c41b", "56b30c0b0cf2a8e8fb3b0821", "56b1a41c0cf2a31552b3a35a", "56b1ae060cf222ea9d0a7ce9", "562ddf3b0cf2870e48efebb8", "566a8b7d0cf2e75d5aa3431c", "56b1b9cb0cf21c17b804c56d", "561f155c0cf2f66bb08a362c", "56b1a8540cf222ea9d0a7acc", "56b1adee0cf2233e233599ac", "56b1b4390cf2dae88bbfb151", "56b1c2e80cf2a8e8fb3af829", "56b1a7950cf2233e233596ac", "56b1a2820cf222ea9d0a7907", "56b1aaa90cf2233e23359832", "56b19f4e0cf2233e23359339", "56b1cc320cf2f49993aeb526", "566c35aa0cf2e14a8912ef87", "56b1a5390cf2233e2335959c", "56b1abad0cf2a31552b3a597", "56b1ac4f0cf222ea9d0a7c1a", "56b1a9250cf2233e2335974d", "56b1a1b60cf2a31552b3a294", "56b3190c0cf2507b73e35042", "56b1deff0cf2f49993aeb80b", "56b22a4b0cf29055eaa8ca23", "56b1b0480cf29fc0faccb737", "56b1ad310cf2a31552b3a66c", "56b1a0610cf2233e23359382", "5684f7730cf2e1ff78051710", "56b1ad2c0cf2a31552b3a666", "56b1b36a0cf2dae88bbfb10a", "56b1bb400cf2f49993aeb282", "56b1a4a90cf222ea9d0a79bd", "568792e10cf2eaf8e9ffe020", "56b1c3000cf2507b73e33f85", "56b31f4e0cf2507b73e350fd", "56b1a70c0cf2a31552b3a44b", "56b1b6990cf2c05778c46640", "56b1abba0cf2a31552b3a59d", "56b199ed0cf2a31552b3a1a1", "56b1d1560cf2a8e8fb3af99b", "56b1ae3e0cf2a31552b3a6cc", "56b1ac6e0cf2a31552b3a604", "56b1cf360cf2507b73e3403b", "56b19d760cf2233e233592fc", "56b19e6b0cf2a31552b3a20a", "56b1b4390cf21c17b804c42a", "56b041460cf2233e23358cd7", "56b1a7460cf222ea9d0a7a94", "56b1a5560cf2233e233595b0", "56b1b6820cf2c05778c4662e", "56b1afb50cf222ea9d0a7dbf", "56b1d6aa0cf2a8e8fb3afa23", "56b1a2e50cf2a31552b3a303", "56b1b9440cf21c17b804c555", "56b198390cf29fc0faccb34e", "56b32d860cf2f49993aed300", "56b235d40cf2f49993aebc35", "56b1c3460cf2f49993aeb400", "56b19a320cf222ea9d0a77a3", "56b1a1a40cf222ea9d0a78d0", "56b1ae5c0cf29fc0faccb6da", "56b1cf930cf2a8e8fb3af943", "56b310040cf2a8e8fb3b0a50", "56b1a9ba0cf2233e233597a8", "56b1aa280cf29fc0faccb5f4", "56b1a4060cf2233e23359500", "56b196620cf222ea9d0a7720", "56b1afb70cf2233e23359b07", "56b1c6420cf29055eaa8c5e6", "56b19cdb0cf2a31552b3a1f0", "5684eaf10cf208206a41eb62", "56b1bde60cf2a8e8fb3af7b1", "56b1b5c80cf207802eff81a4", "56b1e6ca0cf2507b73e3420d", "56b1a5fd0cf222ea9d0a7a26", "56b1b3150cf2c05778c464b3", "56b1b03a0cf2233e23359b53", "56b1a4170cf2a31552b3a354", "56b1a4e60cf222ea9d0a79c5", "56b1a6970cf2233e23359655", "56b19e2b0cf2a31552b3a204", "56b199c50cf2a31552b3a19b", "56b19e830cf222ea9d0a7828", "56b197cd0cf29fc0faccb336", "56b1a2980cf222ea9d0a7920", "56b1aa640cf29fc0faccb605", "56b1d85c0cf2f49993aeb6c2", "56b1a9e60cf2a31552b3a4fb", "56b199730cf2233e23359231", "56b1ae650cf2233e233599f4", "56b1ab2c0cf222ea9d0a7b9b", "56b20eb10cf29055eaa8c977", "56b19edb0cf222ea9d0a7852", "56b2ef100cf2a8e8fb3b0233", "56b19c700cf222ea9d0a77f3", "56b1a3870cf222ea9d0a7952", "56b1ca610cf2a8e8fb3af8f6", "56b1a6690cf2a31552b3a41b", "56b19b410cf2233e23359284", "56b199220cf222ea9d0a7776", "5618c2860cf2040c0242eedd", "56b1cc090cf29055eaa8c64b", "56b1b4da0cf21c17b804c43c", "56b1bd2d0cf2f49993aeb2e6", "56b19e3b0cf2233e23359317", "56b1b23e0cf2c05778c46422", "56b1c7340cf2f49993aeb45b", "56b1d5ea0cf2a8e8fb3afa11", "5667e5220cf2b3f246ce460d", "56b1aade0cf222ea9d0a7b85", "56b197cc0cf2233e233591fb", "56b1b0500cf222ea9d0a7dd6", "56b356860cf2507b73e354f0", "56b1a8160cf2233e233596e8", "56b1a14b0cf222ea9d0a78b0", "56b1a17c0cf2a31552b3a282", "56b1a60b0cf29fc0faccb501", "56b1ee5f0cf2507b73e34257", "56b1a2040cf2233e23359419", "56b1ab4d0cf2a31552b3a577", "56b19bfb0cf2233e233592ae", "56b1bba50cf2507b73e33eaf", "56b1b25a0cf2dae88bbfb0cf", "56b1b2bb0cf2c05778c46476", "56b1afdb0cf2233e23359b2b", "56b1a6550cf2233e23359645", "56b1ade90cf2233e233599a6", "56b1a1ed0cf2a31552b3a2a4", "56b1bb9c0cf2f49993aeb2a0", "56b1a77f0cf2a31552b3a471", "56b1a55d0cf29fc0faccb4c5", "56b1a70c0cf2233e23359675", "56b1d3ba0cf2a8e8fb3af9ba", "56b1b7ca0cf21c17b804c4d5", "56b1a7260cf222ea9d0a7a88", "56b1a1090cf2233e233593d3", "56b199340cf2233e23359218", "56b210aa0cf2a8e8fb3afe29", "56b1a6050cf29fc0faccb4fb", "56b1b9620cf2c05778c466da", "56b17f330cf29fc0faccb2af", "56b19af30cf222ea9d0a77bd", "56b1c1f60cf2a8e8fb3af820", "56b1c65c0cf2f49993aeb437", "56b2ef960cf2507b73e347bd", "56b1a2d80cf2233e2335945f", "56b1f05c0cf2f49993aeb92d", "56b3178c0cf2f49993aecdb5", "56b1b5190cf2c05778c4657a", "56b1a1b70cf222ea9d0a78de", "56b1a2570cf2233e23359431", "56b1a3dc0cf222ea9d0a7968", "56b1d49b0cf2507b73e3409d", "56b19c2c0cf2a31552b3a1ce", "56b1adf00cf2233e233599b2", "56b1ad550cf2a31552b3a67a", "56b1a24e0cf29fc0faccb439", "56b1dbb70cf2a8e8fb3afac8", "56b1a5f00cf29fc0faccb4ed", "56b1ad550cf2233e2335994f", "56b1b2ff0cf2c05778c4649d", "56b1a85d0cf2233e23359711", "56b1f6250cf2a8e8fb3afc61", "56b1befc0cf2a8e8fb3af7e3", "56b1a9f90cf29fc0faccb5ea", "56b1c5da0cf2f49993aeb431", "5668d4060cf2b3f246ce4b06", "56b210d90cf2a8e8fb3afe31", "56b1b1fa0cf21c17b804c3d5", "56b19f6d0cf2a31552b3a226", "56b1a3300cf2a31552b3a311", "56b1da550cf2f49993aeb716", "56b1a2a30cf2a31552b3a2e9", "56b397900cf2507b73e3567a");
