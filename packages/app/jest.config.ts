export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity_obj_proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
