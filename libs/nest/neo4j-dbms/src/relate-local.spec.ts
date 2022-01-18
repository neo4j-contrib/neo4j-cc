import { INestApplication } from '@nestjs/common';
import { Test as NestTest } from '@nestjs/testing';
import {ConfigModule} from '@nestjs/config';

import {DBMS_STATUS, Environment, InvalidArgumentError, waitForDbmsToBeOnline } from '@relate/common';
import {
  ISystemModuleConfig,
  SystemModule as RelateModule,
  SystemProvider,
  EXTENSION_TYPES,
  loadExtensionsFor,
  registerHookListener,
  HOOK_EVENTS,
} from '@relate/common';

const NEO4J_VERSION_TO_TEST = "4.3.5-enterprise";

const relateConfig: ISystemModuleConfig = {
  defaultEnvironmentNameOrId: "neo4j-cc-test"
};

describe('LocalDbmss', () => {
  let app: INestApplication;


  beforeAll(async () => {
    const moduleRef = await NestTest.createTestingModule({
      imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [() => relateConfig],
        }),
        RelateModule.register(relateConfig),
    ],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    // app.teardown()
  });

  afterEach(() => jest.restoreAllMocks());

  test('sanity', async () => {
    const relate = await app.get<SystemProvider>(SystemProvider);

    expect(relate).toBeDefined();

    const relateEnvironments = await relate.listEnvironments();

    console.log(relateEnvironments);
  });


});