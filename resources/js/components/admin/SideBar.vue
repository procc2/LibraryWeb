<template>
  <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
    <form role="search">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Tìm kiếm" />
      </div>
    </form>
    <ul class="nav menu">
      <li class="active">
        <router-link to="/">
          <svg class="glyph stroked dashboard-dial">
            <use xlink:href="#stroked-dashboard-dial" />
          </svg> Trang chủ quản trị
        </router-link>
      </li>
      <li class="parent">
        <router-link to="/user">
          <span data-toggle="collapse" href="#sub-item-1">
            <svg class="glyph stroked chevron-down">
              <use xlink:href="#stroked-chevron-down" />
            </svg>
          </span> Quản lý thành viên
        </router-link>
        <ul class="children collapse" id="sub-item-1">
          <li>
            <a 
              href="register">
              <svg class="glyph stroked plus sign">
                <use xlink:href="#stroked-plus-sign" />
              </svg>
              Thêm mới
            </a>
          </li>
        </ul>
      </li>
      <li class="parent">
        <router-link to="/category">
          <a>
            <span data-toggle="collapse" href="#sub-item-2">
              <svg class="glyph stroked chevron-down">
                <use xlink:href="#stroked-chevron-down" />
              </svg>
            </span> Quản lý danh mục thể loại
          </a>
        </router-link>
        <ul class="children collapse" id="sub-item-2">
          <li>
            <router-link :to="{ name: 'updateCategory'}">
              <svg class="glyph stroked plus sign">
                <use xlink:href="#stroked-plus-sign" />
              </svg> Thêm mới
            </router-link>
          </li>
        </ul>
      </li>
      <li class="parent">
        <router-link to="/book">
            <span data-toggle="collapse" href="#sub-item-3">
              <svg class="glyph stroked chevron-down">
                <use xlink:href="#stroked-chevron-down" />
              </svg>
            </span> Quản lý ấn phẩm
        </router-link>
        <ul class="children collapse" id="sub-item-3">
          <li>
            <router-link :to="{ name: 'updateCategory'}">
              <svg class="glyph stroked plus sign">
                <use xlink:href="#stroked-plus-sign" />
              </svg> Thêm mới
            <router-link>
          </li>
        </ul>
      </li>
      <li class="parent">
        <router-link to="/publisher">
            <span data-toggle="collapse" href="#sub-item-3">
              <svg class="glyph stroked chevron-down">
                <use xlink:href="#stroked-chevron-down" />
              </svg>
            </span> Quản lý danh mục nhà xuất bản
        </router-link>
        <ul class="children collapse" id="sub-item-3">
          <li>
            <router-link :to="{ name: 'updatePublisher'}">
              <svg class="glyph stroked plus sign">
                <use xlink:href="#stroked-plus-sign" />
              </svg> Thêm mới
            </router-link>
          </li>
        </ul>
      </li>
      <li class="parent">
        <router-link to="/author">
            <span data-toggle="collapse" href="#sub-item-3">
              <svg class="glyph stroked chevron-down">
                <use xlink:href="#stroked-chevron-down" />
              </svg>
            </span> Quản lý danh mục tác giả
        </router-link>
        <ul class="children collapse" id="sub-item-3">
          <li>
            <router-link :to="{ name: 'updateAuthor'}">
              <svg class="glyph stroked plus sign">
                <use xlink:href="#stroked-plus-sign" />
              </svg> Thêm mới
            </router-link>
          </li>
        </ul>
      </li>

      <li class="parent">
        <router-link to="/loan">
            <span data-toggle="collapse" href="#sub-item-4">
              <svg class="glyph stroked app window with content">
                <use xlink:href="#stroked-app-window-with-content" />
              </svg>
            </span> Quản lý ấn phẩm thuê
        </router-link>
      </li>
    </ul>
  </div>
  <!--/.sidebar-->
</template>
<script>
export default {
    name : "SideBar"
}
</script>