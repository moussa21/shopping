
public export class Product {

	private productId: number;

	private categoryId: number;

	private  genre: String;

	private  status: String;

	private price: number;


    private images: Blob [] ;


    private comments: Comment[];

	/**
	 *
	 */
	public Product() {
	}

	/**
	 * @param category
	 * @param genre
	 * @param status
	 * @param price
	 * @param images
	 * @param comments
	 */
	public constructor(categoryId: number,  genre: String,  status: String, price: number,images: Image[],
			 comments) {
		this.categoryId = categoryId;
		this.genre = genre;
		this.status = status;
		this.price = price;
		this.images = images;
		this.comments = comments;
	}

	public getProductId() {
		return this.productId;
	}

	public setProductId(productId: number) {
		this.productId = productId;
	}

	public getCategory(): number {
		return this.categoryId;
	}

	public  setCategory(categoryId: number) {
		this.categoryId = categoryId;
	}

	public getGenre(): String {
		return this.genre;
	}

	public setGenre( genre: String) {
		this.genre = genre;
	}

	public getStatus(): String {
		return status;
	}

	public setStatus(status: String) {
		this.status = status;
	}

	public getPrice(): number {
		return this.price;
	}

	public setPrice (price: number) {
		this.price = price;
	}

	public  getImages(): Image[] {
		return images;
	}

	public  setImages(images: Image[]) {
		this.images = images;
	}

	public  getComments(): Comment[] {
		return comments;
	}

	public  setComments(comments: Comment[]) {
		this.comments = comments;
	}


}
