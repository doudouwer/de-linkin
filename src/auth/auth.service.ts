import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async login(walletAddress: string) {
        // TODO: 检查用户是否已注册
        // 如果没有，创建新用户
        return { walletAddress, token: 'mock-jwt-token' };
    }
}
