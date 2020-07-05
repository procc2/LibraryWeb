<template>
    <div class="form-group">
        <label>Ảnh mô tả</label>
        <div class="col-md-3">
            <img
                :src="image"
                v-if="image"
                class="img-responsive"
                height="70"
                width="90"
            />
        </div>
        <div class="col-md-6">
            <input
                type="file"
                v-on:change="onImageChange"
                class="form-control"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageUpload",
    props: ["currentImage"],
    data() {
        return {
            image: "",
            has_change: false,
            new_image: false
        };
    },
    mounted() {
        this.image = this.currentImage;
    },
    methods: {
        onImageChange(e) {
            this.has_change = true;
            if (this.image) this.new_image = true;
            console.log(this.image);
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            let app = this;
            reader.onload = e => {
                app.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        async uploadImage(bookId) {
            console.log(this.new_image);
            if (this.has_change) {
                let res;
                if (this.new_image) {
                    res = await axios.put("/api/files/" + bookId, {
                        image: this.image
                    });
                } else {
                    res = await axios.post("/api/files", {
                        image: this.image,
                        bookId
                    });
                }
                console.log(res);
                return res;
            }

            return null;
        }
        // async changeImage(bookId) {
        //     console.log(this.has_change);
        //     const res = await axios.put("/api/files/" + bookId, {
        //         image: this.image
        //     });
        //     return res;
        // }
    }
};
</script>

<style></style>
