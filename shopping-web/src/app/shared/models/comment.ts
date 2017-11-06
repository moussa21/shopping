import {Product} from './product';
/**
 * @author mbalde
 *
 */

export class Comment {

	private  commentId: number;

	private  productId: number;

	private description: String;

	private userId: number;

	private rating: number;

	/**
	 * @param description
	 * @param userId
	 * @param rating
	 */
	public constructor( description: String, productId: number, userId: number, rating: number) {
		this.description = description;
		this.userId = userId;
        this.rating = rating;
        this.productId = productId;
	}
    static fromJSON(json) {
        const comment: Comment = Object.create(Comment.prototype);
        Object.assign(comment, json);
        return comment;
    }
	public getCommentId(): number {
		return this.commentId;
	}

	public setCommentId(commentId: number) {
		this.commentId = commentId;
	}

	public  getDescription(): String {
		return this.description;
	}

	public setDescription(description: String) {
		this.description = description;
	}

	public getUserId(): number {
		return this.userId;
	}

	public setUserId(userId: number) {
		this.userId = userId;
	}

	public getRating(): number {
		return this.rating;
	}

	public setRating(rating: number) {
		this.rating = rating;
	}
	public getProuctId(): number {
		return this.productId;
	}

	public setProductId(productId: number) {
		this.productId = productId;
	}

}
