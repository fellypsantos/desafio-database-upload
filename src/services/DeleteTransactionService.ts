import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    if (!id) throw new AppError('Transaction identifier is missing.');

    const transactionsRepository = getRepository(Transaction);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) throw new AppError('Transaction does not exists.');

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
