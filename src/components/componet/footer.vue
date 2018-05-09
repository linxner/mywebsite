<template>
    <div>
        <div id="footer">
            <el-footer>
                <el-row>
                    <el-col :span="12">
                        <span>&copy;LINXNE</span>
                    </el-col>
                    <el-col :span="12">
                        <div class="contactMe">
                            <span>联系我：</span>
                            <div class="weixin">
                                <i class="iconfont">&#xe60e;</i>
                                <span class="wxphoto">
                                    <img src="../../assets/images/weixin.jpg" alt="" style="width:100px">
                                </span>
                            </div>
                            <div class="email">
                                <i class="iconfont">&#xe667;</i>
                            </div>
                            <div class="weibo">
                                <i class="iconfont">&#xe61d;</i>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-footer>
        </div>
    </div>
</template>
<style>
#footer {
position: relative;
  background-color: #333;
  color: #fff;
  line-height: 60px;
  text-align: center;
  z-index: 200;
  padding-bottom: 2px;
}
.contactMe div {
  display: inline-block;
}
.iconfont {
  color: #fff;
  font-size: 18px;
  margin-right: 5px;
  cursor: pointer;
}
.weixin {
  position: relative;
}
.weixin span {
  position: absolute;
  top: 50px;
  left: 0;
  display: none;
}
.weixin:hover span {
  display: block;
}
</style>


