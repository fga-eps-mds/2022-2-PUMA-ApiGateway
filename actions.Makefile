test-coverage:
	(sudo docker-compose -f test.docker-compose.yaml up --build --exit-code-from project-service-test  && \
	sudo chmod +x ./tests/utils/db_script_test.sh ./tests/utils/wait-for-it-test.sh ./tests/utils/db_init_test.sh && \
	(./tests/utils/wait-for-it-test.sh dbtest:5432 -- true && echo "\033[92mInitializing database... \033[0m" && ./tests/utils/db_init_test.sh);\
	echo "\033[96mRunning Gateway Tests...\033[0m" && \
	sudo docker-compose -f test.docker-compose.yaml exec api-gateway-test npm run test-coverage );\
	sudo docker-compose -f test.docker-compose.yaml down
