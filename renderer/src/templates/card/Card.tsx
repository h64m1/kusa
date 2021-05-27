import { useState } from 'react'
import { DatePickerContainer } from '../../../../lib/DatePicker'
import { InputContainer } from '../../components/input'
import { LabelContainer } from '../../components/label'

export type ContainerProps = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
}

type Props = ContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	const [activities, setActivities] = useState([''])

	const _date = new Date(props.date)
	return (
		<div className="space-y-2">
			{/* date: add parent div to avoid space between label and date */}
			<div>
				<LabelContainer label="日付" />
				<DatePickerContainer
					selected={_date}
					onChange={(e) => {
						// console.debug(e)
					}}
				/>
			</div>
			{/* activity list */}
			{activities === null || activities === undefined ? (
				<></>
			) : (
				<div>
					<LabelContainer label="アクティビティ" />
					{activities.map((e, i) => {
						const id = `${props.date}-activity-${i}`
						return (
							<div key={i} className="flex flex-row space-x-1">
								<InputContainer
									value={e}
									id={id}
									placeHolder="アクティビティ"
									onChange={(e) => {
										activities[i] = e.target.value
										setActivities(() => [...activities])
										console.debug(
											'input.onChagne',
											e.target.value,
										)
									}}
								/>
								{/* ボタン押下でアクティビティ削除 | TODO: Replace Del to trash icon */}
								<button
									className="hover:bg-gray-50 font-bold py-2 px-3 rounded w-1/12 text-left"
									onClick={() => {
										if (activities.length > 1) {
											// do not remove last element
											setActivities([
												...activities.filter(
													(_, j) => j !== i,
												),
											])
										}
										console.debug(
											'Delete activity',
											activities.length,
										)
									}}
								>
									Del
								</button>
							</div>
						)
					})}
					{/* ボタン押下でアクティビティ追加 */}
					<button
						className="hover:bg-gray-100 font-bold py-2 px-4 rounded w-10/12 text-left"
						onClick={(e) => {
							setActivities(() => [...activities, ''])
							console.debug('add input:', activities.length)
						}}
					>
						+ New
					</button>
				</div>
			)}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component date={props.date} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return <StyledComponent date={props.date} />
}
