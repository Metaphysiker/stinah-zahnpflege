docker exec -t stinah-zahnpflege-production-postgres-1 pg_dumpall -c -U abc > dump_`date +%Y-%m-%d"_"%H_%M_%S`.sql

cat dump_2024-06-15_09_20_48.sql | docker exec -i stinah-zahnpflege-production-postgres-1 psql -U abc

cat dump_with_copied_data_from_old.sql | docker exec -i stinah-zahnpflege-production-postgres-1 psql -U stinah-zahnpflege-user stinah-zahnpflege-db

