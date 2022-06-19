import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createUsers1627513347548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'users',
					columns: [
						{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'rfid',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'contract_init',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'admin_id',
						type: 'uuid',
						isNullable: true,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
				})
			)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
