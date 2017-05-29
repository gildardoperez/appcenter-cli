import { IBuildGradle } from "./../../../../../src/commands/lib/android/models/build-gradle";
import { IBuildGradleCase } from "./models";

const name = "case #01";

const content = `
apply plugin: 'com.android.application'

android {
    compileSdkVersion 25
    buildToolsVersion "25.0.2"
    defaultConfig {
        applicationId "com.example.foreverest.helloandroid"
        minSdkVersion 15
        targetSdkVersion 25
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
    compile 'com.android.support:appcompat-v7:25.3.1'
    compile 'com.android.support.constraint:constraint-layout:1.0.2'
    testCompile 'junit:junit:4.12'
}
`;

const expectedResult: IBuildGradle = {
  path: null,
  contents: null,
  buildVariants: [{ 
    name: "debug", 
    buildType: "debug"
  }, {
    name: "release",
    buildType: "release"
  }],
  sourceSets: [],
  dependenciesBlocks: []
}

const bgCase: IBuildGradleCase = { name, content, expectedResult };
export default bgCase;
