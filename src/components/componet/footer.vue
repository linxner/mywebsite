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
                            <div class="email" title="Email">
                                <i class="iconfont">&#xe667;</i>
                            </div>
                            <div class="weibo" title="微博">
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
    width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #333;
  color: #fff;
  line-height: 60px;
  text-align: center;
  z-index: 8;
  padding-bottom: 3px;
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
  top: -85px;
  left: -35px;
  display: none;
}
.weixin:hover span {
  display: block;
}
</style>


