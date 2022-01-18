import {DBMS_STATUS, Environment, InvalidArgumentError, TestDbmss, TestEnvironment, waitForDbmsToBeOnline } from '@relate/common';

const {ARCHIVE_PATH, NEO4J_VERSION} = TestDbmss;

const NEO4J_VERSION_TO_TEST = "4.3.5-enterprise";

describe('LocalDbmss', () => {
  let app: TestEnvironment;
  let testEnv: Environment;

  beforeAll(async () => {
      app = await TestEnvironment.init(__filename);
      testEnv = app.environment;
  });

  afterAll(() => {
    jest.setTimeout(60000)
    app.teardown()
  });

  afterEach(() => jest.restoreAllMocks());

  test('with no version', async () => {
      await expect(testEnv.dbmss.install(app.createName(), '')).rejects.toThrow(
          new InvalidArgumentError('Version must be specified'),
      );
  });

  test('with invalid version', async () => {
    await expect(testEnv.dbmss.install(app.createName(), 'notAVersionUrlOrFilePath')).rejects.toThrow(
        new InvalidArgumentError('Provided version argument is not valid semver, url or path.'),
    );
  });

  test('with valid version', async () => {
    jest.setTimeout(20000)
    const dbmsInfo = await testEnv.dbmss.install(app.createName(), NEO4J_VERSION_TO_TEST);
    expect(dbmsInfo.id).toBeDefined();

    console.log(dbmsInfo)

    const message = await testEnv.dbmss.get(dbmsInfo.id);
    expect(message.status).toContain(DBMS_STATUS.STOPPED);
  });

  test('with valid version', async () => {
    jest.setTimeout(60000)
    const dbmsInfo = await testEnv.dbmss.install(app.createName(), NEO4J_VERSION_TO_TEST);
    expect(dbmsInfo.id).toBeDefined();

    const message = await testEnv.dbmss.get(dbmsInfo.id);
    expect(message.status).toContain(DBMS_STATUS.STOPPED);

  });

  test('start dbms', async () => {
    jest.setTimeout(60000)
    const dbms = await app.createDbms();
    const config = await testEnv.dbmss.getDbmsConfig(dbms.id);
    
    await testEnv.dbmss.start([dbms.id]);
    await waitForDbmsToBeOnline({
      ...dbms,
      config
    });

    const message = await testEnv.dbmss.get(dbms.id);
    expect(message.status).toContain(DBMS_STATUS.STOPPED);

    await testEnv.dbmss.stop([dbms.id]);
  });

});