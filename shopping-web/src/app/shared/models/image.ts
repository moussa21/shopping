export class Image {

        /**
         * Category identifier
         */

        private  imageId: number;

        private imageName: String;

        private  productId: number;

        private picture: Blob ;

        /**
         *
         */
       constructor(imageName: String, productId: number, picture: Blob ) {
           this.imageName = imageName;
           this.productId = productId;
           this.picture = picture;
        }
        static fromJSON(json) {
            const image: Image = Object.create(Image.prototype);
            Object.assign(image, json);
            return image;
        }

        public  getImageId(): number {
            return this.imageId;
        }

        setImageId(imageId : number) {
            this.imageId = imageId;
        }

        public  getPicture(): Blob {
            return this.picture;
        }

        public setPicture(picture: Blob ) {
            this.picture = picture;
        }

        /**
         * @return the product
         */
        public  getProductId(): number {
            return this.productId;
        }

        /**
         * @param product the product to set
         */
        public setProductId( productId: number) {
            this.productId = productId;
        }

        public getImageName(): String {
            return this.imageName;
        }
        public setImageName(imageName: String){
            this.imageName = imageName;     }
    }
