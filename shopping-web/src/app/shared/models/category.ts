export class Category {

	/**
	 * Category identifier
	 */

	private categoryId: number;

	/**
	 * Category name
	 */
	private name: String;

	/**
	 *
	 */
	public constructor() {

	}


	public getCategoryId(): number {
		return this.categoryId;
	}

	public setCategoryId(categoryId: number) {
		this.categoryId = categoryId;
	}

	public  getName(): String {
		return this.name;
	}

	public  setName(name: String) {
		this.name = name;
	}
}