# branded-record [![Build status](https://travis-ci.org/strong-roots-capital/branded-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/branded-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/branded-record.svg)](https://npmjs.org/package/@strong-roots-capital/branded-record)

> Interface for Record paired with RecordContext

## Install

``` shell
npm install @strong-roots-capital/branded-record
```

## Use

``` typescript
import BrandedRecord from '@strong-roots-capital/branded-record'
```

The `BrandedRecord` interface is defined as

``` typescript
/**
 * A time-series Record associated with the context of its origin.
 */
interface BrandedRecord {
    /**
     * An atomic unit of time-series data.
     */
    record: Record
    /**
     * Context of `record`
     */
    context: RecordContext
}
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
- [record-context](https://github.com/strong-roots-capital/record-context)
