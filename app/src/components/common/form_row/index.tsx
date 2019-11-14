import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { FormLabel } from '../form_label'
import { Tooltip } from '../tooltip'
import { FormRowNote } from '../form_row_note'

const FormRowWrapper = styled.div`
  margin-bottom: 25px;
`

const TooltipStyled = styled(Tooltip)`
  margin-left: auto;
`

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 14px;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  formField: any
  note?: any
  title?: string
  tooltip?: {
    id: string
    description: string
  }
}

export const FormRow = (props: Props) => {
  const { formField, title, note, tooltip, ...restProps } = props
  return (
    <FormRowWrapper {...restProps}>
      <TitleWrapper>
        {title ? <FormLabel>{title}</FormLabel> : null}
        {tooltip ? <TooltipStyled description={tooltip.description} id={tooltip.id} /> : null}
      </TitleWrapper>
      {formField}
      {note ? <FormRowNote>{note}</FormRowNote> : null}
    </FormRowWrapper>
  )
}
