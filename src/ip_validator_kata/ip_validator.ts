export class IPValidator {
    public validateIpv4Address(ip: string): boolean {
        const bytes: string[] = ip.split(".");
        if (bytes.length != 4) return false;

        const isHostIp: boolean = bytes[3] !== "255" && Number(bytes[3]) !== 0;
        if (!isHostIp) return false;

        for (const num of bytes) {
            if (num.length === 1) continue;
            for (const digit of num) {
                if (Number(digit) === 0) return false;
                else break;
            }
        }
        
        return true;
    }
}