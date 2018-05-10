<template>
  <div class="container" :class="{'control':control}">
    <div class="blog-show">
      <div class="blog-aside">
        <div class="self-info">
          <div class="head-img"></div>
          <div class="self-info-detail">
            <dl class="blog-detail">
              <dt>微博</dt>
              <dd>{{blogSum}}</dd>
            </dl>
            <dl class="blog-detail">
              <dt>喜欢</dt>
              <dd>{{likedSum}}</dd>
            </dl>
            <dl class="blog-detail">
              <dt>粉丝</dt>
              <dd>1</dd>
            </dl>
          </div>
        </div>
        <div class="self-btns">
          <el-button type="primary" icon="el-icon-edit" @click="editBlog">写微博</el-button>
          <el-button type="success">我的关注</el-button>
        </div>
      </div>
      <div class="blog-content">
        <div class="blog-list">
          <ul class="blog-lists">
            <li v-for="item in list" :key="item.id">
              <h2>
                <span>{{item.title}}</span>
              </h2>
              <p>
                <span>{{item.discription}}</span>
              </p>
              <div class="pzd">
                <div>
                  <i class="el-icon-edit-outline"></i>
                  <span>评论</span>
                </div>
                <div>
                  <i class="el-icon-star-on" @click="like(item)" :class="{mylike:item.liked}"></i>
                  <span>喜欢</span>
                </div>
                <div>
                  <i></i>
                  <span class="el-icon-share">转载</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="blog-hide">

      <div class="blogedit">
        <div class="blog-edit">
          <el-row class="edit-nav">
            <el-col :span=2 class="nav-word">标题：</el-col>
            <el-col :span=12>
              <el-input placeholder="请输入内容" v-model="title" clearable>
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="blog-edit">
          <el-row class="edit-nav">
            <el-col :span=2 class="nav-word">描述：</el-col>
            <el-col :span=12>
              <el-input resize="none" type="textarea" :rows="2" placeholder="请输入内容" v-model="discription">
              </el-input>
            </el-col>
            <!-- <el-col :span=4 :offset=5>
              <el-button type="primary" @click="confirmBlog">发布</el-button>
              <el-button type="success" @click="returnBlog">取消</el-button>
            </el-col> -->
          </el-row>
        </div>
      </div>
      <el-input resize="none" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 30, maxRows: 100}" v-model="confirmContent"></el-input>
      <div class="confirm-btn">
        <el-button type="primary" @click="confirmBlog">发布</el-button>
        <el-button type="success" @click="returnBlog">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
var store = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch(key) {
    return JSON.parse(localStorage.getItem(key)) || []
  }
}
var list = store.fetch('my-blog')
export default {
  data() {
    return {
      list: list,
      control: false,
      confirmContent: '',
      discription: '',
      title: '',
    }
  },
  computed: {
    blogSum() {
      return this.list.length
    },
    likedSum() {
      return this.list.filter(function (item) {
        return item.liked
      }).length
    }
  },
  methods: {
    confirmBlog() {
      if (this.confirmContent && this.title !== '') {
        this.list.push({
          title: this.title,
          confirmContent: this.confirmContent,
          discription: this.discription,
          liked: false
        })
      this.control = false        
      }
      this.title = ''
      this.confirmContent = ''
      this.discription = ''
    },
    returnBlog() {
      this.control = false
    },
    editBlog() {
      this.control = true
    },
    like(item) {
      item.liked = !item.liked
    }
  },
  watch: {
    list: {
      handler: function () {
        store.save('my-blog', this.list)
      },
      deep: true

    }
  }
}
</script>
<style <style lang="less" scoped>
.control {
  .blog-show {
    display: none;
  }
  .blog-hide {
    display: block;
  }
}

.container {
  width: 1140px;
  height: 1000px;
  margin: 50px auto 0;
  background-color: #fff;
  padding: 0;
  .confirm-btn {
    padding: 20px;
  }
}

.blog-show {
  .blog-aside {
    width: 300px;
    height: 900px;
    position: fixed;
    background-color: #ebeef5;
    .self-btns {
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
    .self-info {
      width: 100%;
      text-align: center;
      .head-img {
        display: inline-block;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        background-color: #fff;
        margin-top: 20px;
      }
      .self-info-detail {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        letter-spacing: 0.5em;
        margin-top: 15px;
        .blog-detail {
          display: inline-block;
          letter-spacing: normal;
          font-size: 16px;
          margin-right: 15px;
          cursor: pointer;
        }
      }
    }
  }
  .blog-content {
    position: relative;
    width: 840px;
    margin-left: 300px;
    .blog-list {
      width: 100%;
      .blog-lists {
        width: 100%;
        list-style: none;
        li {
          position: relative;
          box-sizing: border-box;
          padding-left: 10px;
          width: 100%;
          color: #303133;
          line-height: 2;
          font-size: 14px;
          border-bottom: 1px solid #e4e7ed;
          &:hover {
            background-color: #f2f6fc;
          }
          span {
            cursor: pointer;
          }
          .pzd {
            position: absolute;
            bottom: 0;
            right: 0;
            color: #909399;
            letter-spacing: 0.5em;
            margin-right: 10px;
            .mylike {
              color: #f56c6c;
            }
            div {
              display: inline-block;
              letter-spacing: normal;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.blog-hide {
  display: none;
  .blogedit {
    width: 100%;
    background-color: #f2f6fc;
    .blog-edit {
      width: 100%;
      height: 55px;
      padding-bottom: 20px;
      .edit-nav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
      }
      .edit-txt {
        padding: 5px;
        height: 30px;
        border: none;
        width: 99%;
        height: 900px;
        outline: none;
        resize: none;
        font-size: 16px;
      }
    }
  }
}
</style>


