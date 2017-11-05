export class Image {

        /**
         * Category identifier
         */

        private  imageId: number;


        private  productId: number;

        private picture: Blob ;

        /**
         *
         */
       constructor() {
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

    }
