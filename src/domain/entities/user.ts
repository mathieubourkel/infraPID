import { UserRole } from "../enums/user-role.enum"
import { UserStatus } from "../enums/user-status.enum"

export class User {
    private readonly _id?: number
    private _email: string
    private _password: string
    private _status: UserStatus
    private _role: UserRole
    
    constructor(email: string, password: string, status: UserStatus, role: UserRole, id?: number){
        this._id = id
        this._email = email
        this._password = password
        this._status = status
        this._role = role
    }

    get password(): string {
        return this._password
    }

    set password(value: string) {
        if (value.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }
        this._password = value;
    }

    get email(): string {
        return this._email
    }

    set email(value: string) {
        if (!this.validateEmail(value)) {
            throw new Error('Invalid email address');
        }
        this._email = value;
    }

    private validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
