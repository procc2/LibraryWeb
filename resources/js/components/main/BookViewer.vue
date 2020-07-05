<template>
    <modal name ="viewer"
    width = "1000"
    height="auto"
    :scrollable="true"
     >
        <div style="text-align:center">
            <input v-model.number="currentPage" type="number" style="width: 5em" /> /{{
                pageCount
            }}
        </div>
        <div>
        <pdf
            ref="pdf"
            style="border: 1px solid red"
            v-bind:src="src"
            :page="currentPage"
            @num-pages="pageCount = $event"
            @page-loaded="currentPage = $event"
        ></pdf>
        </div>
    </modal>
</template>

<script>
import pdf from "vue-pdf";

export default {
    props: ["ebook"],
    components: {
        pdf
    },
    data() {
        return {
            // ebook:"",
            src: "https://dmgxmuhskmu5e.cloudfront.net/book/document/"+ this.ebook[0].name,
            currentPage: 1,
            pageCount: 0,
            
        };
    },
    mounted() {
        console.log(this.ebook)
        console.log(this.src);
        
        // this.$modal.show('viewer');
        // this.src.then(pdf => {
        //     this.numPages = pdf.numPages;
        //     console.log(pdf);
        // });
    },
    methods: {
        error: function(err) {

			console.log(err);
		}
    }
};
</script>

<style></style>
