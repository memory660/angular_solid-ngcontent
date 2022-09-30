// abonnement premium = premium + standard
// abonnement standart = standard

export class BaseSubscriber {
    name?: string;
}

export interface IPremium {
    premiumContent(): void;
}

export interface IStandard {
    standardContent(): void;
}

//

export class PremiumSubscriber extends BaseSubscriber implements IPremium, IStandard {
    premiumContent(): void {
        throw new Error("Method not implemented.");
    }
    standardContent(): void {
        throw new Error("Method not implemented.");
    }
}

export class StandardSubscriber extends BaseSubscriber implements IStandard {
    standardContent(): void {
        throw new Error("Method not implemented.");
    }
}