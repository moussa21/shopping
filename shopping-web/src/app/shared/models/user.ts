


export class User {


	private userId: number;

	private name: String;

	private firstName: String;

	private phone: String;

	private email: String;

	/**
	 *
	 */
	public constructor() {
	}

	/**
	 * @param name
	 * @param firstName
	 * @param phone
	 * @param mail
	 */
	public constructorr(name: String, firstName: String, phone: String, email: String) {
		this.name = name;
		this.firstName = firstName;
		this.phone = phone;
		this.email = email;
	}
    static fromJSON(json) {
        const user: User = Object.create(User.prototype);
        Object.assign(user, json);
        return user;
    }
	/**
	 * @return the userId
	 */
	publicgetUserId(): number {
		return this.userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public setUserId(userId: number) {
		this.userId = userId;
	}

	/**
	 * @return the name
	 */
	public getName(): String {
		return this.name;
	}

	/**
	 * @param name the name to set
	 */
	public setName(String : String) {
		this.name = name;
	}

	/**
	 * @return the firstName
	 */
	public getFirstName(): String {
		return this.firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public setFirstName(firstName: String) {
		this.firstName = firstName;
	}

	/**
	 * @return the phone
	 */
	public getPhone(): String {
		return this.phone;
	}

	/**
	 * @param phone the phone to set
	 */
	public setPhone(phone: String) {
		this.phone = phone;
	}

	/**
	 * @return the email
	 */
	public getMail(): String {
		return this.email;
	}

	/**
	 * @param mail the mail to set
	 */
	public setMail( email: String) {
		this.email = email;
	}
}
