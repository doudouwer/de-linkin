export type ReputationResult = 'success' | 'fail';

export class RecordReputationRequest {
    wallet: string;
    orderId: number;
    result: ReputationResult;
}