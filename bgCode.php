<?php
session_start();
header("Content-type: image/png");
$img = imagecreate(44, 20);
$bgColor = imagecolorallocate ($img, 245, 245, 245);
//背景
imagefill($img, 0, 0, $bgColor);
srand((double)microtime() * 1000000);
//生成4位数字

//$vcodes="";
//for ($i = 0; $i < 4; $i++) {
//	$font =imagecolorallocate ($img, rand(100, 255), rand(0, 100), rand(100, 255));
//	$autonum =rand(0, 9);
//	$vcodes.=$autonum;//拼接之后，导致页面图片出不来，原因何在？session？？？？？？？？？？
// imagestring($img, 5, 2 + $i * 10, rand(0, 5), $autonum, $font);
//
//}
//生成字母数字方法
$vcodes="";
for ($i = 0; $i < 4; $i++){
	$font =imagecolorallocate ($img, rand(100, 255), rand(0, 100), rand(100, 255));
	$fontsize=5;
	$data='zxcvbnmasdfghjklqwertyuiop123456789';
	$autonum=substr($data, rand(0,strlen($data)),1);
	$vcodes.=$autonum;
	imagestring($img, 5, 2 + $i * 10, rand(1, 3), $autonum, $font);
}

//给背景添加一些样式图标
for ($i = 0; $i < 100; $i++) {
	$randcolor = imagecolorallocate ($img, rand(0, 255), rand(0, 255), rand(0, 255));
	imagesetpixel($img, rand() % 80, rand() % 20, $randcolor);
}
//增加线干扰因素

	for ($i = 0; $i < 2; $i++) {
		$linecolor = imagecolorallocate($img, rand(80, 220), rand(80, 220), rand(80, 220));
		imageline($img, rand(1, 44), rand(1, 29), rand(1, 44), rand(1, 29), $linecolor);
	}
	imagepng($img);
	imagedestroy($img);
	$_SESSION["vcodes"] = $vcodes;

?>
 