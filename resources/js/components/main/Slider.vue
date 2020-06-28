<template>
    <!-- Start Slider area -->
    <carousel
        :loop="true"
        :navText="navText"
        :autoplay="false"
        :margin="0"
        :autoplayTimeout="10000"
        :dots="false"
        :items="4"
        :responsive="{
            0: {
                items: 1
            },
            1920: {
                items: 1
            }
        }"
        class="slider-area brown__nav slider--15 slide__arrow01"
    >
        <!-- Start Single Slide -->
        <div
            class="slide animation__style10 bg-image--1 fullscreen align__center--left"
        >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="slider__content">
                            <div class="contentbox">
                                <h2>Thư <span>viện </span></h2>
                                <h2>sách <span>của </span></h2>
                                <h2>bạn <span>tại đây </span></h2>
                                <a class="shopbtn" href="#">vào ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Single Slide -->
        <!-- Start Single Slide -->
        <div
            class="slide animation__style10 bg-image--7 fullscreen align__center--left"
        >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="slider__content">
                            <div class="contentbox">
                                <h2>Thư <span>viện </span></h2>
                                <h2>sách <span>của </span></h2>
                                <h2>bạn <span>tại đây </span></h2>
                                <a class="shopbtn" href="#">vào ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Single Slide -->
    </carousel>
    <!-- End Slider area -->
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
    components: {
        carousel
    },
    data: function() {
        return {
            navText: [
                '<i class="zmdi zmdi-chevron-left"></i>',
                '<i class="zmdi zmdi-chevron-right"></i>'
            ]
        };
    }
};
</script>

<style></style>
