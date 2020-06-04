<template>
    <div class="form-group">
        <label>Ebook</label>
        
        <div class="col-md-6">
            <input
                type="file"
                v-on:change="onEbookChange"
                class="form-control"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "ebookUpload",
    data() {
        return {
            ebook: "",
            has_change: false,
            new_ebook: false
        };
    },
    methods: {
        onEbookChange(e) {
            console.log(e);
            this.has_change = true;
            if (this.ebook) this.new_ebook = true;
            console.log(this.ebook);
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.ebook = files[0];
        },
        // createEbook(file) {
        //     let reader = new FileReader();
        //     let app = this;
        //     reader.onload = e => {
        //         console.log(e);
        //         app.ebook = e.target.result;
        //     };
        //     reader.readAsDataURL(file);
        // },
        async uploadEbook(bookId) {
            if (this.has_change) {
                let res;
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                }

                // form data
                let formData = new FormData();
                formData.append('ebook', this.ebook);
                if (this.new_ebook) {
                    res = await axios.put("/api/files/" + bookId, formData, config);
                } else {
                    formData.append('bookId', bookId);
                    res = await axios.post("/api/files", formData, config);
                }
                console.log(res);
                return res;
            }

            return null;
        }
        // async changeEbook(bookId) {
        //     console.log(this.has_change);
        //     const res = await axios.put("/api/files/" + bookId, {
        //         ebook: this.ebook
        //     });
        //     return res;
        // }
    }
};
</script>

<style></style>
