import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export default class createUsersConstraints1628689252186 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createForeignKey(
			'users',
			new TableForeignKey({
				name: 'FKUsersAdmin',
				referencedTableName: 'admin_users',
				columnNames: ['admin_id'],
				referencedColumnNames: ['id'],
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			})
		)

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('users', 'FKUsersAdmin');
	}

}
