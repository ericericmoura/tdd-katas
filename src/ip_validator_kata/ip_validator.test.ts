import { beforeEach, describe, expect, test } from "vitest";
import { IPValidator } from "./ip_validator.js";

describe("IP Validator", () => {
    let validator: IPValidator;

    beforeEach(() => {
        validator = new IPValidator();
    })

    test.for([
        { ip: "1.1.1.1"        , expected: true  },
        { ip: "192.168.1.1"    , expected: true  },
        { ip: "10.0.0.1"       , expected: true  },
        { ip: "192.168.1.0"    , expected: false },
        { ip: "192.168.1.00"   , expected: false },
        { ip: "0.0.0.0"        , expected: false },
        { ip: "255.255.255.255", expected: false },
        { ip: "10.0.1"         , expected: false },
        { ip: "192.168.01.1"   , expected: false },
        { ip: "192.168.1.00"   , expected: false },
    ])("should return $expected for ip '$ip'", ({ip, expected}) => {
        expect(validator.validateIpv4Address(ip)).toBe(expected);
    })
})